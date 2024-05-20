import { Inject, Injectable } from '@nestjs/common';
import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { User, UserSchema } from './schemas/users';
import { MongoDbService } from '../mongodb/mongodb.service';

export interface UserToken {
  accessToken: string;
  userId: string;
}

@Injectable()
export class UsersService {
  private userTokens: Record<
    string,
    {
      accessToken: string;
      userId: string;
    }
  > = {};
  private readonly userModel: any;
  private readonly users: User[] = [
    new User('1', 'john', 'changeme', 'john@company.com'),
    new User('2', 'maria', 'guess', 'maria@company.com'),
  ];

  constructor(@Inject('DATABASE_CONNECTION') private readonly mongoDbService: MongoDbService) {
    this.userModel = mongoDbService.getModel(User.name, UserSchema);
  }

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

  async create(createUser: User): Promise<User> {
    const userModel = new this.userModel(createUser);
    return userModel.save();
  }
}
