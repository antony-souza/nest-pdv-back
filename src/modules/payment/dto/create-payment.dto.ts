import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PaymentMethods, PaymentStatus } from 'src/interfaces/payments';

export class CreatePaymentDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  userId: string;

  @IsString()
  userName: string;

  @IsString()
  storeName: string;

  @IsString()
  storeId: string;

  @IsString()
  boxId: string;

  @IsString()
  boxName: string;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  total: number;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  quantity: number;

  @IsEnum(PaymentMethods)
  paymentMethod: PaymentMethods;

  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
