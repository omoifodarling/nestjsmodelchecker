import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [AuthModule, UsersModule, JwtService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
