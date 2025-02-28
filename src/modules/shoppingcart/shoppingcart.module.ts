import { Module } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ShoppingcartController } from './shoppingcart.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Shoppingcart,
  ShoppingcartSchema,
} from './entities/shoppingcart.entity';
import { ShoppingCartRepository } from './shoppingcart.repository';
import { Product, ProductSchema } from '../product/entities/product.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shoppingcart.name, schema: ShoppingcartSchema },
    ]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ShoppingcartController],
  providers: [ShoppingcartService, ShoppingCartRepository],
})
export class ShoppingcartModule {}
