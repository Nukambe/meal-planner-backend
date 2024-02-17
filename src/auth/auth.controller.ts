import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
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

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(@Body() body: Record<string, string>) {
    const { username, password, plan, templates } = body;
    return this.authService.signUp(username, password, plan, templates);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get('user')
  getUser(@Request() req) {
    const username = req.user.username;
    return this.authService.restoreUser(username);
  }
}
