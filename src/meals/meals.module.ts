import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { RecipesModule } from './recipes/recipes.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [MealsController],
  providers: [MealsService],
  imports: [RecipesModule, HttpModule],
})
export class MealsModule {}
