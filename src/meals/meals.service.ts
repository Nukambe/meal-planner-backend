import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map as rxjsMap } from 'rxjs';
import { Meal } from 'meal-planner-types';
import { Meal as MealModel } from './meal.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MealsService {
  nutrients: string[] = [
    'Calories',
    'Carbohydrates',
    'Fat',
    'Protein',
    'Saturated Fat',
    'Net Carbohydrates',
    'Sugar',
    'Cholesterol',
    'Sodium',
    'Fiber',
  ];
  constructor(
    private readonly http: HttpService,
    @InjectModel(MealModel) private readonly mealModel: typeof MealModel,
  ) {}

  async getMealsByIds(ids: number[]) {
    return await this.mealModel.findAll({ where: { mealId: ids } });
  }

  async getMealsFromDb() {
    return await this.mealModel.findAll();
  }

  async findAll(
    number = 9,
    sort = 'healthiness',
    offset = 0,
    calories = { min: 0, max: 1000 },
    carbs = { min: 0, max: 1000 },
    fat = { min: 0, max: 1000 },
    protein = { min: 0, max: 1000 },
  ): Promise<any> {
    const db = await this.mealModel.findAll();
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
              const dbMeal = db.find(
                (meal) => meal.dataValues.mealId === recipe.id,
              );
              if (dbMeal) {
                return dbMeal;
              }
              const meal: Meal = {
                id: recipe.id,
                title: recipe.title,
                readyInMinutes: recipe.readyInMinutes,
                servings: recipe.servings,
                image: recipe.image,
                imageType: recipe.imageType,
                nutrients: recipe.nutrition.nutrients.filter((nutrient) =>
                  this.nutrients.includes(nutrient.name),
                ),
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
              this.saveMeal(meal);
              return meal;
            });
          }),
          catchError((err) => {
            console.log(err);
            return db;
          }),
        ),
    );
    return meals;
  }

  async saveMeal(meal: Meal) {
    this.mealModel.create({
      id: meal.id,
      mealId: meal.id,
      title: meal.title,
      readyInMinutes: meal.readyInMinutes,
      servings: meal.servings,
      image: meal.image,
      imageType: meal.imageType,
      nutrients: meal.nutrients,
      ingredients: meal.ingredients,
      summary: meal.summary,
      cuisines: meal.cuisines,
      dishTypes: meal.dishTypes,
      diets: meal.diets,
      instructions: meal.instructions,
    });
  }
}
