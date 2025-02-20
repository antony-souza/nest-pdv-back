import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';

import { StoreRepository } from './store.repository';
import UploadFileFactoryService from 'src/utils/uploads/upload-file.service';

@Injectable()
export class StoreService {
  constructor(
    private readonly storeRepository: StoreRepository,
    private readonly uploadImg: UploadFileFactoryService,
  ) {}

  async create(createStoreDto: CreateStoreDto) {
    let imgUrl = '';

    if (createStoreDto.imgUrl) {
      imgUrl = await this.uploadImg.upload(createStoreDto.imgUrl);
    }

    return await this.storeRepository.create({
      ...createStoreDto,
      imgUrl: imgUrl,
    });
  }
}
