import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsModule } from './meals/meals.module';
import { CategoriesModule } from './categories/categories.module';
import { MealPlanModule } from './meal-plan/meal-plan.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MealsModule,
    CategoriesModule,
    MealPlanModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
