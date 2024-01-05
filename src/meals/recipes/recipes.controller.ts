import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('meals/:mealId/recipe')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  // @Post()
  // create(@Body() createRecipeDto: CreateRecipeDto) {
  //   return this.recipesService.create(createRecipeDto);
  // }

  // @Get()
  // findAll() {
  //   return this.recipesService.findAll();
  // }

  @Get()
  findOne(@Param('mealId') id: string) {
    return this.recipesService.findOne(+id);
  }

  @Patch()
  update(
    @Param('mealId') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ) {
    return this.recipesService.update(+id, updateRecipeDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.recipesService.remove(+id);
  // }
}
