import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { databaseProvider } from './database/dbProvider';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, JwtModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  exports: [databaseProvider],
  providers: [databaseProvider, AppService, UsersService, AuthService],
})
export class AppModule {}
