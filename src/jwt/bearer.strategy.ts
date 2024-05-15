import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth/auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BearerPayload, JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { bearerConstants } from '../auth/constants';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy, 'bearer') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: bearerConstants.secret,
    });
  }

  async validate(payload: BearerPayload) {
    const user = await this.authService.validateUser(payload.token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
