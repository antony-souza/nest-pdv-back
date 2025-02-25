import { Transform } from 'class-transformer';
import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  price: number;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  stock: number;

  @IsOptional()
  imgUrl?: Express.Multer.File;

  @IsString()
  categoryId: string;

  @IsString()
  storeId: string;

  @IsBoolean()
  @IsOptional()
  enabled?: boolean;
}
