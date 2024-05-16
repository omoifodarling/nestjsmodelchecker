import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { bearerConstants } from '../auth/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/users';
import { databaseProvider } from '../database/dbProvider';

@Module({
  imports: [
    JwtModule.register({
      secret: bearerConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [databaseProvider, AuthService, UsersService],
  exports: [UsersService, databaseProvider],
  controllers: [UsersController],
})
export class UsersModule {}
