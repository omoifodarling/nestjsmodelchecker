import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { bearerConstants } from '../auth/constants';

@Module({
  imports: [
    JwtModule.register({
      secret: bearerConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [UsersService, AuthService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
