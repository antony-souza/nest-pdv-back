import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IPaymentMethods, IPaymentStatus } from 'src/interfaces/payments';

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

  @IsEnum(IPaymentMethods)
  @IsOptional()
  paymentMethod?: IPaymentMethods;

  @IsEnum(IPaymentStatus)
  @IsOptional()
  status?: IPaymentStatus;

  @IsBoolean()
  @IsOptional()
  enabled?: boolean;
}
