import { Nutrition } from 'src/nutrition/nutrition';
import { Recipe } from 'src/meals/recipes/entities/recipe.entity';

export class Meal {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public recipe: Recipe,
    public nutrition: Nutrition,
    public cookTime: number,
    public category: string,
    public cuisine: string,
    public tags: string[],
    public image: string,
  ) {}
}
