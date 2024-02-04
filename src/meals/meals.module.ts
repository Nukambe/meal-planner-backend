import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { RecipesModule } from './recipes/recipes.module';
import { HttpModule } from '@nestjs/axios';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal } from './meal.model';

@Module({
  controllers: [MealsController],
  providers: [MealsService],
  imports: [RecipesModule, HttpModule, SequelizeModule.forFeature([Meal])],
})
export class MealsModule {}
