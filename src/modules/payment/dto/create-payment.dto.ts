import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PaymentMethods, PaymentStatus } from 'src/interfaces/payments';

export class CreatePaymentDto {
  @IsOptional()
  @IsString()
  _id?: string;

  @IsString()
  productId: string;

  @IsString()
  @IsOptional()
  productName?: string;

  @IsString()
  userId: string;

  @IsString()
  @IsOptional()
  userName?: string;

  @IsString()
  @IsOptional()
  storeName?: string;

  @IsString()
  storeId: string;

  @IsString()
  pdvId: string;

  @IsString()
  @IsOptional()
  pdvBox?: string;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  pendingValue?: number;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  quantity: number;

  @IsEnum(PaymentMethods)
  @IsOptional()
  paymentMethod?: PaymentMethods;

  @IsEnum(PaymentStatus)
  @IsOptional()
  status?: PaymentStatus;

  @IsBoolean()
  @IsOptional()
  enabled?: boolean;
}
