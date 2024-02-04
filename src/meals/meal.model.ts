import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Meal extends Model {
  @Column
  mealId: number;
  @Column
  title: string;
  @Column
  readyInMinutes: number;
  @Column
  servings: number;
  @Column
  image: string;
  @Column
  imageType: string;
  @Column(DataType.JSON)
  nutrients: {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number;
  }[];
  @Column(DataType.JSON)
  ingredients: {
    id: number;
    name: string;
    amount: number;
    unit: string;
  }[];
  @Column
  summary: string;
  @Column(DataType.JSON)
  cuisines: string[];
  @Column(DataType.JSON)
  dishTypes: string[];
  @Column(DataType.JSON)
  diets: string[];
  @Column(DataType.JSON)
  instructions: {
    number: number;
    step: string;
  }[];
}
