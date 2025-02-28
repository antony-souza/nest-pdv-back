import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingCartRepository } from './shoppingcart.repository';
import { PaymentService } from '../payment/payment.service';
import { PaymentRepository } from '../payment/payment.repository';

@Injectable()
export class ShoppingcartService extends PaymentService {
  constructor(
    private readonly shoppingCartRepository: ShoppingCartRepository,
    protected readonly PaymentRepository: PaymentRepository,
  ) {
    super(PaymentRepository);
  }

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
