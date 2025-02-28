import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Shoppingcart } from './entities/shoppingcart.entity';
import { Model } from 'mongoose';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class ShoppingCartRepository {
  constructor(
    @InjectModel(Shoppingcart.name)
    private readonly shoppingCartModel: Model<Shoppingcart>,
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async addProductsFromShoppingCart(data: Shoppingcart): Promise<Shoppingcart> {
    const cartMapItens = await Promise.all(
      data.itens.map(async (item) => {
        const searchProducts = await this.productModel.findOne({
          _id: item.productId,
        });

        if (!searchProducts) {
          throw new NotFoundException('Product not found');
        }

        return {
          productId: item.productId,
          productName: searchProducts.name,
          productQuantity: item.productQuantity,
          totalValue: item.productQuantity * searchProducts.price,
        };
      }),
    );

    const addShoppingCart = await this.shoppingCartModel.create({
      itens: cartMapItens,
    });

    if (!addShoppingCart) {
      throw new BadRequestException(
        'Error to add products from shopping cart - Repository',
      );
    }

    return addShoppingCart;
  }
}
