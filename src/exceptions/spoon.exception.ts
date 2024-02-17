import { ArgumentsHost, HttpException, Injectable } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MealsService } from 'src/meals/meals.service';
import { Response } from 'express';
import { InjectModel } from '@nestjs/sequelize';
import { Meal } from 'src/meals/meal.model';

@Injectable()
export class SpoonException extends BaseExceptionFilter {
  constructor(
    private readonly mealsService: MealsService,
    @InjectModel(Meal) private readonly mealModel: typeof Meal,
  ) {
    super();
  }

  async catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (status === 403) {
      return response.status(403).json({
        message: 'Forbidden resource',
        error: 'Forbidden',
        statusCode: 403,
      });
    }
    const db = await this.mealModel.findAll();
    return response.status(200).json(db);
  }
}
