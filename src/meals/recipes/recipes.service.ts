import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

import { meals } from 'src/sample-meals';

@Injectable()
export class RecipesService {
  // create(createRecipeDto: CreateRecipeDto) {
  //   return 'This action adds a new recipe';
  // }

  // findAll() {
  //   return `This action returns all recipes`;
  // }

  findOne(id: number) {
    return meals.find((meal) => meal.id === id)?.recipe || 'Recipe not found';
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} recipe`;
  // }
}
