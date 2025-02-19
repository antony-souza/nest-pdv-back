import { Prop, Schema } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({ timestamps: true, versionKey: false })
export class Category {
  @Prop({ type: String, default: randomUUID, required: false })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: false })
  imgUrl?: string;

  @Prop({ type: String, required: true, ref: 'Store' })
  storeId: string;

  @Prop({ type: Boolean, required: false, default: true })
  enabled?: boolean;
}
