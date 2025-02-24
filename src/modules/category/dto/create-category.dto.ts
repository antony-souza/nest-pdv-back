import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  name: string;

  @IsOptional()
  imgUrl?: Express.Multer.File;

  @IsString()
  storeId: string;
}
