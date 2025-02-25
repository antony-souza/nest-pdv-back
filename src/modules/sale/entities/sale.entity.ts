import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({ timestamps: true, versionKey: false })
export class Sale {
  @Prop({ type: String, required: false, default: randomUUID })
  _id?: string;

  @Prop({ type: String, required: true })
  productId: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  storeId: string;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ type: String, required: true })
  paymentMethod: string;

  @Prop({ type: String, required: true })
  status: string;
}

export const SaleSchema = SchemaFactory.createForClass(Sale);
