import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { Category } from '../category/entities/category.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(data: Product): Promise<Product> {
    const checkProduct = await this.productModel.findOne({
      name: data.name,
      categoryId: data.categoryId,
      storeId: data.storeId,
    });

    if (checkProduct) {
      throw new ConflictException('Product already exists');
    }

    const checkCategory = await this.categoryModel.findOne({
      _id: data.categoryId,
      storeId: data.storeId,
    });

    return await this.productModel.create({
      ...data,
      categoryName: checkCategory.name,
    });
  }
}
