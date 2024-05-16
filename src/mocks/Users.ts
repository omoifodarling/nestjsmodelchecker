import { User } from '../users/schemas/users';
import { NotFoundException } from '@nestjs/common';

export class MockedUserModel {
  constructor(private _: any) {}

  private static users: User[] = [
    new User('1', 'john', 'changeme', 'john@company.com'),
    new User('2', 'maria', 'guess', 'maria@company.com'),
  ];
  new = jest.fn().mockResolvedValue(MockedUserModel.users[0]);
  static save = jest.fn().mockResolvedValue(MockedUserModel.users[0]);
  static find = jest.fn().mockReturnThis();
  static create = jest.fn().mockReturnValue(MockedUserModel.users[0]);
  static findOneAndDelete = jest.fn().mockImplementation((id: string) => {
    if (id == 'error') throw new NotFoundException();
    return this;
  });
  static exec = jest.fn().mockReturnValue(MockedUserModel.users[0]);
  static select = jest.fn().mockReturnThis();
  static findOne = jest.fn().mockImplementation((id: string) => {
    if (id == 'error') throw new NotFoundException();
    return this;
  });
}
