import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column(DataType.JSON)
  plan: any;

  @Column(DataType.JSON)
  templates: any;
}
