import {
  Controller,
  Get,
  Body,
  Patch,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(@Request() req) {
    const id = req.user.sub;
    return this.templatesService.findAll(id);
  }

  @UseGuards(AuthGuard)
  @Patch()
  async update(@Request() req, @Body() templates: any) {
    const id = req.user.sub;
    return this.templatesService.update(id, templates);
  }
}
