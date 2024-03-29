import {
  Controller,
  Get,
  Body,
  Patch,
  UseGuards,
  Request,
  HttpCode,
} from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
// import { CreateMealPlanDto } from './dto/create-meal-plan.dto';
// import { UpdateMealPlanDto } from './dto/update-meal-plan.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('meal-plan')
export class MealPlanController {
  constructor(private readonly mealPlanService: MealPlanService) {}

  @UseGuards(AuthGuard)
  @Get()
  getMealPlan(@Request() req) {
    const id = req.user.sub;
    return this.mealPlanService.getMealPlan(id);
  }

  @UseGuards(AuthGuard)
  @HttpCode(200)
  @Patch()
  update(@Request() req, @Body() body: any) {
    const id = req.user.sub;
    return this.mealPlanService.update(id, body);
  }
}
