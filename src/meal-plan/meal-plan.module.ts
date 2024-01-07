import { Module } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { MealPlanController } from './meal-plan.controller';

@Module({
  controllers: [MealPlanController],
  providers: [MealPlanService],
})
export class MealPlanModule {}
