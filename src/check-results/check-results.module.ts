import { Module } from '@nestjs/common';
import { CheckResultsService } from './check-results.service';
import { CheckResultsController } from './check-results.controller';

@Module({
  controllers: [CheckResultsController],
  providers: [CheckResultsService],
})
export class CheckResultsModule {}
