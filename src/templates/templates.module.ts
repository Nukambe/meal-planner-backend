import { Module } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';

@Module({
  controllers: [TemplatesController],
  providers: [TemplatesService],
  imports: [SequelizeModule.forFeature([User])],
})
export class TemplatesModule {}
