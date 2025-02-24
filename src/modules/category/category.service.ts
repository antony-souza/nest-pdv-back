import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryRepository } from './category.repository';
import UploadFileFactoryService from 'src/utils/uploads/upload-file.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly uploadImg: UploadFileFactoryService,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    let imgUrl = '';

    if (createCategoryDto.imgUrl) {
      imgUrl = await this.uploadImg.upload(createCategoryDto.imgUrl);
    }

    const category = await this.categoryRepository.create({
      ...createCategoryDto,
      imgUrl: imgUrl,
    });

    if (!category) {
      throw new BadRequestException('Category not created');
    }

    return category;
  }
}
