import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CategorySchema } from './entities/category.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CategorySchema }])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule { }
