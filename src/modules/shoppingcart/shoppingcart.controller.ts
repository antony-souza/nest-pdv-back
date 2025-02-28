import { Body, Controller, Post } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';

@Controller('/shoppingcart')
export class ShoppingcartController {
  constructor(private readonly shoppingcartService: ShoppingcartService) {}

  @Post('/addProductsFromShoppingCart')
  addShoppingCart(@Body() body: CreateShoppingcartDto) {
    return this.shoppingcartService.addProductsFromShoppingCart(body);
  }
}
