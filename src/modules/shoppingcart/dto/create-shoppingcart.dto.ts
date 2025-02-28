import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class ItensShoppingCart {
  @IsString()
  productId: string;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  productQuantity: number;

  @IsString()
  @IsOptional()
  productName?: string;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @IsOptional()
  totalValue?: number;
}

export class CreateShoppingcartDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsArray()
  itens: ItensShoppingCart[];

  @IsOptional()
  enabled?: boolean;
}
