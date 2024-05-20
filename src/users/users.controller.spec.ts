import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongoDbModule } from '../mongodb/mongodb.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { MongoDbService } from '../mongodb/mongodb.service';
import { AuthService } from '../auth/auth.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      imports: [JwtModule, AuthModule, MongoDbModule],
      providers: [
        AuthService,
        UsersService,
        {
          provide: 'DATABASE_CONNECTION',
          useExisting: MongoDbService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
