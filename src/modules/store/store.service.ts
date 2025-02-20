import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';

import { StoreRepository } from './store.repository';
import UploadFileFactoryService from 'src/utils/uploads/upload-file.service';
import { UpdateStoreDto } from './dto/update-store.dto';

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

    const store = await this.storeRepository.create({
      ...createStoreDto,
      imgUrl: imgUrl,
    });

    if (!store) {
      throw new BadRequestException('Store not created');
    }
    return store;
  }

  async findAll() {
    return await this.storeRepository.findAll();
  }

  async findOne(id: string) {
    return await this.storeRepository.findOne(id);
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    let imgUrl = '';

    if (updateStoreDto.imgUrl) {
      imgUrl = await this.uploadImg.upload(updateStoreDto.imgUrl);
    }

    const update = await this.storeRepository.update(id, {
      ...updateStoreDto,
      imgUrl: imgUrl,
    });

    if (!update) {
      throw new BadRequestException('Store not found - update');
    }
  }

  async disable(id: string) {
    const disableStore = await this.storeRepository.disable(id);

    if (!disableStore) {
      throw new BadRequestException('Store not found - disable');
    }
  }
}
