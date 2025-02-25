import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductRepository } from './product.repository';
import UploadFileFactoryService from 'src/utils/uploads/upload-file.service';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly uploadImg: UploadFileFactoryService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    let imgUrl = '';

    if (createProductDto.imgUrl) {
      imgUrl = await this.uploadImg.upload(createProductDto.imgUrl);
    }

    const product = this.productRepository.create({
      ...createProductDto,
      imgUrl: imgUrl,
    });

    if (!product) {
      throw new BadRequestException('Error on create product');
    }

    return product;
  }
}
