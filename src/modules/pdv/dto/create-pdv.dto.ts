import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePdvDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  box: string;

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
