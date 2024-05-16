import { Test, TestingModule } from '@nestjs/testing';
import { CheckResultsService } from './check-results.service';

describe('CheckResultsService', () => {
  let service: CheckResultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckResultsService],
    }).compile();

    service = module.get<CheckResultsService>(CheckResultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
