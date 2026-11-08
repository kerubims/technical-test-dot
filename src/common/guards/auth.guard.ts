import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const http = context.switchToHttp();
    const req = http.getRequest<Request>();
    const res = http.getResponse<Response>();

    const session = (req as any).session;
    if (session && session.user) {
      return true;
    }

    const acceptHeader = req.get('Accept') || '';
    if (
      acceptHeader.includes('application/json') ||
      req.xhr ||
      req.path.startsWith('/api')
    ) {
      throw new UnauthorizedException('Authentication required. Please login.');
    }

    res.redirect('/login');
    return false;
  }
}

