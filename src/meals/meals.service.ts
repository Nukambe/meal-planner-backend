import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

import { meals } from 'src/sample-meals';

@Injectable()
export class MealsService {
  create(createMealDto: CreateMealDto) {
    return 'This action adds a new meal';
  }

  findAll() {
    return meals;
  }

  findOne(id: number) {
    return meals.find((meal) => meal.id === id) || 'Meal not found';
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
