import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({ timestamps: true, versionKey: false })
export class Pdv {
  @Prop({ type: String, default: randomUUID, required: false })
  _id?: string;

  @Prop({ type: String, required: true })
  box: string;

  @Prop({ type: Boolean, required: false, default: true })
  status?: boolean;

  @Prop({ type: String, required: true, ref: 'Store' })
  storeId: string;

  @Prop({ type: Boolean, required: false, default: true })
  enabled?: boolean;
}

export const PdvSchema = SchemaFactory.createForClass(Pdv);
