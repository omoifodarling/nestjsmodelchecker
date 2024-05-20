import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { MongoDbService } from '../mongodb/mongodb.service';
import { MongoDbModule } from '../mongodb/mongodb.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'DATABASE_CONNECTION',
          useExisting: MongoDbService,
        },
      ],
      imports: [MongoDbModule],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
