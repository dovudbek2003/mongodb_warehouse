import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Cat } from './entities/category.entity';
import { Connection, Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(@InjectConnection() private connection: Connection, @InjectModel(Cat.name) private CategoryModel: Model<Cat>) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<Cat> {
    const createdCategory = new this.CategoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll(): Promise<Cat[]> {
    console.log(await this.CategoryModel.find().exec());

    return this.CategoryModel.find().exec();
  }

  // create(createCategoryDto: CreateCategoryDto) {
  //   return 'This action adds a new category';
  // }

  // findAll() {
  //   return `This action returns all category`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
