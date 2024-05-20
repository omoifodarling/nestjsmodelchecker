import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

import { AuthModule } from './auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { MongoDbService } from '../mongodb/mongodb.service';
import { MongoDbModule } from '../mongodb/mongodb.module';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        {
          provide: 'DATABASE_CONNECTION',
          useExisting: MongoDbService,
        },
      ],
      imports: [AuthModule, JwtModule, MongoDbModule],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
