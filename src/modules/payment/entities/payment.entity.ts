import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { IPaymentMethods, IPaymentStatus } from 'src/interfaces/payments';

@Schema({ timestamps: true, versionKey: false })
export class Payment {
  @Prop({ type: String, required: false, default: randomUUID })
  _id?: string;

  @Prop({ type: Number, required: true })
  totalValue: number;

  @Prop({
    type: String,
    required: false,
    enum: Object.values(IPaymentStatus),
    default: IPaymentStatus.PENDING,
  })
  status?: IPaymentStatus;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(IPaymentMethods),
    default: IPaymentMethods.CASH,
  })
  paymentMethod: IPaymentMethods;

  @Prop({ type: Boolean, required: false })
  enabled?: boolean;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
