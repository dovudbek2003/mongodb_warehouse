import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://oktamovdovudbek030415:LOsTcKkLcTAg7cF2@cluster0.h059osf.mongodb.net/?retryWrites=true&w=majority'),
    CategoryModule
  ],
})
export class AppModule { }
