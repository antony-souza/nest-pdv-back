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
    const cartMapItens = await Promise.all([
      data.itens.map(async (item) => {
        const product = await this.productModel.findById(item.productId);

        if (!product) {
          throw new NotFoundException('Product not found');
        }

        return {
          ...item,
          totalValue: product.price * item.productQuantity,
          productName: product.name,
        };
      }),
    ]);

    const cart = await this.shoppingCartModel.create({
      itens: cartMapItens,
    });

    if (!cart) {
      throw new BadRequestException('Error to add products from shopping cart');
    }

    return cart;
  }
}
