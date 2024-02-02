import { Controller, Get, Query, UseFilters } from '@nestjs/common';
import { MealsService } from './meals.service';
import { SpoonException } from 'src/exceptions/spoon.exception';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  @UseFilters(SpoonException) // Return cached meals if the API call fails
  findAll(
    @Query('number') number: string,
    @Query('sort') sort: string,
    @Query('offset') offset: string,
    @Query('minCalories') minCalories: string,
    @Query('maxCalories') maxCalories: string,
    @Query('minCarbs') minCarbs: string,
    @Query('maxCarbs') maxCarbs: string,
    @Query('minProtein') minProtein: string,
    @Query('maxProtein') maxProtein: string,
    @Query('minFat') minFat: string,
    @Query('maxFat') maxFat: string,
  ) {
    return this.mealsService.findAll(
      +number || 9,
      sort || 'healthiness',
      +offset || 0,
      { min: +minCalories || 0, max: +maxCalories || 1000 },
      { min: +minCarbs || 0, max: +maxCarbs || 1000 },
      { min: +minFat || 0, max: +maxFat || 1000 },
      { min: +minProtein || 0, max: +maxProtein || 1000 },
    );
  }
}
