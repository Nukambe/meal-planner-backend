import { Module } from '@nestjs/common';
import { MealPlanService } from './meal-plan.service';
import { MealPlanController } from './meal-plan.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';

@Module({
  controllers: [MealPlanController],
  providers: [MealPlanService],
  imports: [SequelizeModule.forFeature([User])],
})
export class MealPlanModule {}
