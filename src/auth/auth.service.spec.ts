import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { AuthModule } from './auth.module';
import { JwtModule } from '@nestjs/jwt';
import { MongoDbService } from '../mongodb/mongodb.service';
import { MongoDbModule } from '../mongodb/mongodb.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'DATABASE_CONNECTION',
          useExisting: MongoDbService,
        },
        AuthService,
      ],
      imports: [AuthModule, JwtModule, MongoDbModule],
    }).compile();

    // noinspection TypeScriptValidateTypes
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
