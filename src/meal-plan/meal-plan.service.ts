import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { MealPlan } from 'meal-planner-types';

@Injectable()
export class MealPlanService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private sequelize: Sequelize,
  ) {}

  async getMealPlan(id: number) {
    const user = await this.userModel.findByPk(id, {
      attributes: ['plan'],
    });
    const plan = user?.dataValues.plan;
    console.log('plan', plan);
    if (!plan) {
      const mealPlan = new MealPlan([], []);
      return mealPlan;
    }
    return plan;
  }

  async update(id: number, mealPlan: any) {
    if (mealPlan) {
      const user = await this.userModel.findByPk(id);
      await user.update({ plan: mealPlan });
      console.log(user.dataValues.plan);
      return user.dataValues.plan;
    }
  }
}
