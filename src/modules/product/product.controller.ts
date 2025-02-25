import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('imgUrl'))
  create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() imgUrl: Express.Multer.File,
  ) {
    return this.productService.create({
      ...createProductDto,
      imgUrl: imgUrl,
    });
  }
}
