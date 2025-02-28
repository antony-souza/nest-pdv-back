import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

export class ItensCart {
  @Prop({ type: String, required: false })
  productId: string;

  @Prop({ type: Number, required: false })
  productName?: string;

  @Prop({ type: Number, required: false })
  productQuantity: number;

  @Prop({ type: Number, required: false })
  totalValueProduct?: number;
}

@Schema({ versionKey: false, timestamps: true })
export class Shoppingcart {
  @Prop({ type: String, default: randomUUID, required: false })
  _id?: string;

  @Prop({ type: [ItensCart], required: false })
  itens?: ItensCart[];

  @Prop({ type: Boolean, required: false, default: true })
  enabled?: boolean;

  @Prop({ type: Number, required: true })
  totalShoppingCart: number;
}

export const ShoppingcartSchema = SchemaFactory.createForClass(Shoppingcart);
