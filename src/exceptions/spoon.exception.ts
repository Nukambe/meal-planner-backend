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
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const db = await this.mealModel.findAll();
    response.status(200).json(db);
  }
}
