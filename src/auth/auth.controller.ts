import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() credentials: Record<string, string>) {
    return this.authService.signIn(credentials.username, credentials.password);
  }

  @UseGuards(AuthGuard)
  @Get('meal-plan')
  getMealPlan(@Request() req) {
    return req.user;
  }
}
