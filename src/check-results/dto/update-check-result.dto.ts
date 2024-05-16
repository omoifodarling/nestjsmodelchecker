import { PartialType } from '@nestjs/swagger';
import { CreateCheckResultDto } from './create-check-result.dto';

export class UpdateCheckResultDto extends PartialType(CreateCheckResultDto) {}
