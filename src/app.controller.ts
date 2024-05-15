import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { BearerAuthGuard } from './auth/auth.bearer.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
