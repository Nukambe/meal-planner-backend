import { Nutrition } from '../nutrition/nutrition';

export class Ingredient {
  constructor(
    public id: number,
    public name: string,
    public amount: number,
    public unit: string,
    public nutrition: Nutrition,
  ) {}
}
