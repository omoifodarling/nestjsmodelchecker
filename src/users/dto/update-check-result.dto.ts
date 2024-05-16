import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-check-result.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
