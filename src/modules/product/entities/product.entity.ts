import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({ versionKey: false, timestamps: true })
export class Product {
  @Prop({ type: String, default: randomUUID, required: false })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, required: true })
  stock: number;

  @Prop({ type: String, required: false })
  imgUrl?: string;

  @Prop({ type: String, required: true, ref: 'Category' })
  categoryId: string;

  @Prop({ type: String, required: false })
  categoryName?: string;

  @Prop({ type: String, required: true, ref: 'Store' })
  storeId: string;

  @Prop({ type: Boolean, required: false, default: true })
  enabled?: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
