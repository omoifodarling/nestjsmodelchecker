import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { BearerStrategy } from '../jwt/bearer.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { bearerConstants, jwtConstants } from './constants';

/*@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: jwtConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UsersModule,
  ],

  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
    HttpStrategy,
    JwtStrategy,
    BearerStrategy,
  ],
  controllers: [AuthController],

})*/
@Module({
  imports: [
    PassportModule,
    UsersModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [JwtStrategy, BearerStrategy, AuthService, UsersService],
  exports: [PassportModule, UsersModule],
  controllers: [AuthController],
})
export class AuthModule {}
