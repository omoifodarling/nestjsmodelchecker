// auth.guard.ts
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service'; // Assuming you have an AuthService

@Injectable()
export class BearerAuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Check if the Authorization header exists and starts with 'Bearer '
    const authHeader = request.headers?.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid Authorization header.');
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(' ')[1];

    try {
      // Validate the token using your AuthService or directly with a JWT service
      const decodedPayload = await this.authService.validateToken(token);

      // Attach the decoded payload to the request object for further use
      request.user = decodedPayload;

      return true;
    } catch (error) {
      console.error('Authentication error:', error.message);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
