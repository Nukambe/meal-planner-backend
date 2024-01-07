import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

// import { meals } from 'src/sample-meals';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map as rxjsMap } from 'rxjs';
import {
  Meal,
  Recipe,
  Ingredient,
  Nutrient,
  Nutrition,
} from 'meal-planner-types';

@Injectable()
export class MealsService {
  constructor(private readonly http: HttpService) {}

  create(createMealDto: CreateMealDto) {
    return 'This action adds a new meal';
  }

  async findAll(): Promise<any> {
    const meals = await firstValueFrom(
      this.http
        .get(
          'https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&addRecipeNutrition=true&ignorePantry=false&number=10',
          {
            headers: { 'x-api-key': process.env.SPOON_API },
          },
        )
        .pipe(
          rxjsMap((res) => {
            console.log(res.data.results);
            return res.data.results.map(
              (recipe) =>
                new Meal(
                  recipe.id,
                  recipe.title,
                  recipe.summary,
                  new Recipe(
                    [],
                    recipe.nutrition.ingredients.map(
                      (ingredient: {
                        id: number;
                        name: string;
                        amount: number;
                        unit: string;
                        nutrients: Nutrient[];
                      }) =>
                        new Ingredient(
                          ingredient.id,
                          ingredient.name,
                          ingredient.amount,
                          ingredient.unit,
                          new Nutrition(ingredient.nutrients),
                        ),
                    ),
                    recipe.analyzedInstructions[0].steps.map(
                      (step: { step: string }) => step.step,
                    ),
                  ),
                  new Nutrition(recipe.nutrition.nutrients),
                  recipe.readyInMinutes,
                  recipe.diets[0],
                  recipe.cuisines[0],
                  recipe.dishTypes,
                  recipe.image,
                ),
            );
          }),
          catchError((err) => {
            console.log(err);
            return err;
          }),
        ),
    );
    return meals;
  }

  findOne(id: number) {
    return 'This action returns a #${id} meal';
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
