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
  @Transform(({ value }) => parseFloat(value))
  totalValue: number;

  @IsEnum(IPaymentMethods)
  paymentMethod: IPaymentMethods;

  @IsEnum(IPaymentStatus)
  @IsOptional()
  status?: IPaymentStatus;

  @IsBoolean()
  @IsOptional()
  enabled?: boolean;
}
