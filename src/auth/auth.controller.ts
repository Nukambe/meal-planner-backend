import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() credentials: Record<string, string>) {
    // console.log('username:', username);
    return this.authService.signIn(credentials.username, credentials.password);
  }

  @UseGuards(AuthGuard)
  @Get('meal-plan')
  getMealPlan(@Request() req) {
    return req.user;
  }
}
