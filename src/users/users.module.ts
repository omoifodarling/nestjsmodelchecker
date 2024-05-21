import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthService } from '../auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { bearerConstants } from '../auth/constants';
import { MongoDbModule } from '../mongodb/mongodb.module';
import { MongoDbService } from '../mongodb/mongodb.service';

@Module({
  imports: [
    JwtModule.register({
      secret: bearerConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    MongoDbModule,
  ],
  providers: [MongoDbService, AuthService, UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
