import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateStoreDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  name: string;

  @IsOptional()
  imgUrl?: Express.Multer.File;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  phone: string;

  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  enabled?: boolean;
}
