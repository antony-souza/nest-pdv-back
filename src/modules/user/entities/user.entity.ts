import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ type: String, default: randomUUID, required: false })
  _id?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop({
    type: String,
    required: false,
    default: 'https://i.imgur.com/VqHHVac.jpeg',
  })
  imgUrl?: string;

  @Prop({ type: String, required: true, ref: 'Store' })
  storeId: string;

  @Prop({ type: Boolean, required: false, default: true })
  enabled?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
