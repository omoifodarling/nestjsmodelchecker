import { Injectable } from '@nestjs/common';
import { CreateCheckResultDto } from './dto/create-check-result.dto';
import { UpdateCheckResultDto } from './dto/update-check-result.dto';

@Injectable()
export class CheckResultsService {
  create(createCheckResultDto: CreateCheckResultDto) {
    return 'This action adds a new checkResult';
  }

  findAll() {
    return `This action returns all checkResults`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkResult`;
  }

  update(id: number, updateCheckResultDto: UpdateCheckResultDto) {
    return `This action updates a #${id} checkResult`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkResult`;
  }
}
