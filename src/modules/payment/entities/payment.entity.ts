import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { PaymentMethods, PaymentStatus } from 'src/interfaces/payments';

@Schema({ timestamps: true, versionKey: false })
export class Payment {
  @Prop({ type: String, required: false, default: randomUUID })
  _id?: string;

  @Prop({ type: String, required: true })
  productId: string;

  @Prop({ type: String, required: false })
  productName?: string;

  @Prop({ type: String, required: false, default: randomUUID })
  userId: string;

  @Prop({ type: String, required: false })
  userName?: string;

  @Prop({ type: String, required: false })
  storeName?: string;

  @Prop({ type: String, required: true })
  storeId: string;

  @Prop({ type: String, required: true })
  pdvId: string;

  @Prop({ type: String, required: false })
  pdvBox?: string;

  @Prop({ type: Number, required: false })
  pendingValue?: number;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({
    type: String,
    required: false,
    enum: Object.values(PaymentMethods),
    default: PaymentMethods.CASH,
  })
  paymentMethod?: PaymentMethods;

  @Prop({
    type: String,
    required: false,
    enum: Object.values(PaymentStatus),
    default: PaymentStatus.PENDING,
  })
  status?: PaymentStatus;

  @Prop({ type: Boolean, required: false })
  enabled?: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
