import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';

export interface User {
  firstName?: string;
  lastName?: string;
  username: string;
  accessToken?: string;
  email: string;
  userId: string;
  password: string;
}

export interface UserToken {
  accessToken: string;
  userId: string;
}

@Injectable()
export class UsersService {
  private userTokens: Record<string, UserToken> = {};
  private readonly users: User[] = [
    {
      userId: '1',
      username: 'john',
      password: 'changeme',
      email: 'john@company.com',
    },
    {
      userId: '2',
      username: 'maria',
      password: 'guess',
      email: 'maria@company.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findOneByToken(token: string): Promise<User | undefined> {
    return this.users.find((user) => user.accessToken === token);
  }

  async findOneByEmail(payload: JwtPayload): Promise<User | undefined> {
    return this.users.find((user) => user.email === payload.email);
  }

  async findAll(): Promise<User[] | undefined> {
    const tempUsers = [...this.users];
    const sentUsers = tempUsers.reduce((acc, val) => {
      if (val.hasOwnProperty('accessToken')) val['accessToken'] = undefined;
      val['password'] = undefined;
      acc.push(val);
      return acc;
    }, []);
    console.info({ sentUsers: sentUsers });
    return sentUsers;
  }

  registerUserToken(token: string, username: string) {
    const user = this.users.find((user) => user.username === username);
    this.userTokens[username] = { accessToken: token, userId: user.userId };
    this.users.reduce((acc, val, ind) => {
      if (val.username === username) {
        val['accessToken'] = token;
      }
      acc[ind] = val;
      return acc;
    }, this.users);
  }
}
