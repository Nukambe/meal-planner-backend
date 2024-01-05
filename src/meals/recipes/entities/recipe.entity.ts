import { Ingredient } from 'src/ingredient/ingredient';

export class Recipe {
  constructor(
    public tools: string[],
    public ingredients: Ingredient[],
    public instructions: string[],
  ) {}
}
