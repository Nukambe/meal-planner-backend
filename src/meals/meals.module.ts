import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  controllers: [MealsController],
  providers: [MealsService],
  imports: [RecipesModule],
})
export class MealsModule {}
