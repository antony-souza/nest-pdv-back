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

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  pendingValue?: number;

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
