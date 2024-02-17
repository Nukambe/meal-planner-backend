import { Controller, Get, Redirect, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiGuard } from './api/api.guard';

@UseGuards(ApiGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('http://localhost:3000/users', 301)
  getHello(): string {
    return this.appService.getHello();
  }
}
