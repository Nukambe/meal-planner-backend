import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ unique: true, allowNull: false })
  username: string;

  @Column({ allowNull: false })
  password: string;

  @Column(DataType.JSON)
  plan: any;

  @Column(DataType.JSON)
  templates: any;
}
