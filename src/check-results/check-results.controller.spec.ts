import { Test, TestingModule } from '@nestjs/testing';
import { CheckResultsController } from './check-results.controller';
import { CheckResultsService } from './check-results.service';

describe('CheckResultsController', () => {
  let controller: CheckResultsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckResultsController],
      providers: [CheckResultsService],
    }).compile();

    controller = module.get<CheckResultsController>(CheckResultsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
