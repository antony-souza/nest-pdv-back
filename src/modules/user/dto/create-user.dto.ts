import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: string;

  @IsOptional()
  imgUrl?: Express.Multer.File;

  @IsString()
  storeId: string;
}
