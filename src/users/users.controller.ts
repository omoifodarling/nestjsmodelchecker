import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BearerAuthGuard } from '../auth/auth.bearer.guard';
import { UsersService } from './users.service';
import { User } from './schemas/users';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('')
  @UseGuards(BearerAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string' },
        password: { type: 'string' },
        email: { type: 'string' },
        firstName: { type: 'string' },
      },
      required: ['username', 'password', 'email'],
    },
  })
  create(@Body() createUserDto: User) {
    return this.usersService.create(createUserDto);
  }
}
