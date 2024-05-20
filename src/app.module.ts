import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { MongoDbService } from './mongodb/mongodb.service';
import { MongoDbModule } from './mongodb/mongodb.module';

@Module({
  imports: [AuthModule, JwtModule, MongoDbModule],
  controllers: [AppController],
  exports: [AppService],
  providers: [
    MongoDbService,
    AppService,
    UsersService,
    MongoDbService,
    {
      provide: 'DATABASE_CONNECTION',
      useExisting: MongoDbService,
    },
    AuthService,
  ],
})
export class AppModule {}
