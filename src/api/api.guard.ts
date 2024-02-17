import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ApiGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.headers['mp-api-key'] !== process.env.API_KEY) {
      console.log('API key is incorrect');
      return false;
    }
    console.log('API key is correct ');
    return true;
  }
}
