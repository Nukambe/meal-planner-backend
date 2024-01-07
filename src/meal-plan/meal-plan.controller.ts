import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';

@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @Post()
  create(@Body() createMealPlanDto: CreateMealPlanDto) {
    return this.mealPlanService.create(createMealPlanDto);
  }

  @Get()
  findAll() {
    return this.mealPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealPlanDto: UpdateMealPlanDto) {
    return this.mealPlanService.update(+id, updateMealPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealPlanService.remove(+id);
  }
}
