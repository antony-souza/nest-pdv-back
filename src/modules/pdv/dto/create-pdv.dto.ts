import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePdvDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  box: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  status?: boolean;

  @IsString()
  storeId: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  enabled?: boolean;
}
