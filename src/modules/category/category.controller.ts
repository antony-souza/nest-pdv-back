import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('imgUrl'))
  create(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFile() imgUrl: Express.Multer.File,
  ) {
    return this.categoryService.create({
      ...createCategoryDto,
      imgUrl: imgUrl,
    });
  }
}
