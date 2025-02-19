import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({ versionKey: false, timestamps: true })
export class Store {
  @Prop({ type: String, default: randomUUID, required: false })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  address: string;

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  state: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: Boolean, required: false, default: true })
  enabled?: boolean;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
