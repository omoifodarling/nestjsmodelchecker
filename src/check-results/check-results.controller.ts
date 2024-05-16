import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckResultsService } from './check-results.service';
import { CreateCheckResultDto } from './dto/create-check-result.dto';
import { UpdateCheckResultDto } from './dto/update-check-result.dto';

@Controller('check-results')
export class CheckResultsController {
  constructor(private readonly checkResultsService: CheckResultsService) {}

  @Post()
  create(@Body() createCheckResultDto: CreateCheckResultDto) {
    return this.checkResultsService.create(createCheckResultDto);
  }

  @Get()
  findAll() {
    return this.checkResultsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkResultsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckResultDto: UpdateCheckResultDto) {
    return this.checkResultsService.update(+id, updateCheckResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkResultsService.remove(+id);
  }
}
