import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private sequelize: Sequelize,
  ) {}

  async create(username: string, password: string, plan: any, templates: any) {
    return await this.userModel.create({ username, password, plan, templates });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return await this.userModel.findByPk(id);
  }

  async findOneByUsername(username: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { username } });
    return user.dataValues;
  }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async remove(id: number): Promise<void> {
    await this.userModel.destroy({ where: { id } });
  }
}
