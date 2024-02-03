import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map as rxjsMap } from 'rxjs';
import { Meal } from 'meal-planner-types';

@Injectable()
export class MealsService {
  db: { [key: number]: Meal } = {};
  constructor(private readonly http: HttpService) {}

  async findAll(
    number = 9,
    sort = 'healthiness',
    offset = 0,
    calories = { min: 0, max: 1000 },
    carbs = { min: 0, max: 1000 },
    fat = { min: 0, max: 1000 },
    protein = { min: 0, max: 1000 },
  ): Promise<any> {
    const meals = await firstValueFrom(
      this.http
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&addRecipeNutrition=true&ignorePantry=false&sort=${sort}&number=${number}&offset=${offset}&minCalories=${calories.min}&maxCalories=${calories.max}&minCarbs=${carbs.min}&maxCarbs=${carbs.max}&minProtein=${protein.min}&maxProtein=${protein.max}&minFat=${fat.min}&maxFat=${fat.max}`,
          {
            headers: { 'x-api-key': process.env.SPOON_API },
          },
        )
        .pipe(
          rxjsMap((res) => {
            return res.data.results.map((recipe) => {
              const cached = this.db[recipe.id];
              if (cached) {
                console.log(`Found cached meal ${cached.title}`);
                return cached;
              }
              const meal: Meal = {
                id: recipe.id,
                title: recipe.title,
                readyInMinutes: recipe.readyInMinutes,
                servings: recipe.servings,
                image: recipe.image,
                imageType: recipe.imageType,
                nutrients: recipe.nutrition.nutrients,
                ingredients: recipe.nutrition.ingredients.map((ingredient) => ({
                  id: ingredient.id,
                  name: ingredient.name,
                  amount: ingredient.amount,
                  unit: ingredient.unit,
                })),
                summary: recipe.summary,
                cuisines: recipe.cuisines,
                dishTypes: recipe.dishTypes,
                diets: recipe.diets,
                instructions: recipe.analyzedInstructions[0]?.steps.map(
                  (step) => ({ number: step.number, step: step.step }),
                ),
              };
              this.db[recipe.id] = meal;
              return meal;
            });
          }),
          catchError((err) => {
            console.log(err);
            return Object.values(this.db);
          }),
        ),
    );
    return meals;
  }
}
