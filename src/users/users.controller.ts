import { Controller, Get, UseGuards } from '@nestjs/common';
import { BearerAuthGuard } from '../auth/auth.bearer.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  @UseGuards(BearerAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }
}
