import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingCartRepository } from './shoppingcart.repository';

@Injectable()
export class ShoppingcartService {
  constructor(
    private readonly shoppingCartRepository: ShoppingCartRepository,
  ) {}

  async addProductsFromShoppingCart(dto: CreateShoppingcartDto) {
    const addToCart =
      await this.shoppingCartRepository.addProductsFromShoppingCart(dto);

    if (!addToCart) {
      throw new BadRequestException(
        'Error to add products from shopping cart - Service',
      );
    }

    return addToCart;
  }
}
