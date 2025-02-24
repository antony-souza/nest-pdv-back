import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(data: Category): Promise<Category> {
    const checkCategory = await this.categoryModel.findOne({
      storeId: data.storeId,
      name: data.name,
    });

    if (checkCategory) {
      throw new ConflictException('Category already exists');
    }

    return await this.categoryModel.create(data);
  }
}
