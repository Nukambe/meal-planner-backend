import { Nutrition } from 'src/nutrition/nutrition';
import { Meal } from '../../meals/entities/meal.entity';

class Day {
  meals?: Meal[];
  limits?: Nutrition;

  constructor() {
    this.meals = [];
    this.limits = new Nutrition([]);
  }
}

class Week {
  sunday: Day;
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  limits?: Nutrition;

  constructor() {
    this.sunday = new Day();
    this.monday = new Day();
    this.tuesday = new Day();
    this.wednesday = new Day();
    this.thursday = new Day();
    this.friday = new Day();
    this.saturday = new Day();
    this.limits = new Nutrition([]);
  }
}

class Year {
  weeks?: Week[];

  constructor() {
    this.weeks = [];
  }
}

export class MealPlan {
  constructor(public years?: Year[]) {}
}
