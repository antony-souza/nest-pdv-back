import { Prop, Schema } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { PaymentMethods, PaymentStatus } from 'src/interfaces/payments';

@Schema({ timestamps: true, versionKey: false })
export class Payment {
  @Prop({ type: String, required: false, default: randomUUID })
  _id?: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: String, required: true })
  userName: string;

  @Prop({ type: String, required: true })
  storeName: string;

  @Prop({ type: String, required: true })
  storeId: string;

  @Prop({ type: String, required: true })
  boxId: string;

  @Prop({ type: String, required: true })
  boxName: string;

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ type: Number, required: true })
  quantity: number;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(PaymentMethods),
    default: PaymentMethods.CASH,
  })
  paymentMethod: PaymentMethods;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(PaymentStatus),
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;
}
