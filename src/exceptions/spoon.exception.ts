import { ArgumentsHost, HttpException, Injectable } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MealsService } from 'src/meals/meals.service';
import { Response } from 'express';

@Injectable()
export class SpoonException extends BaseExceptionFilter {
  constructor(private readonly mealsService: MealsService) {
    super();
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response.status(200).json(Object.values(this.mealsService.db));
  }
}
