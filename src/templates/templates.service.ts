import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';

@Injectable()
export class TemplatesService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(id: number) {
    const user = await this.userModel.findByPk(id, {
      ['attributes']: ['templates'],
    });
    console.log(user?.dataValues.templates);
    const templates = user?.dataValues.templates;
    if (!templates) {
      user.update({ templates: [] });
      return [];
    }
    return templates;
  }

  async update(id: number, templates: any) {
    if (templates) {
      const user = await this.userModel.findByPk(id);
      await user.update({ templates });
      return user.dataValues.templates;
    }
  }
}
