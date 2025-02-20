import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('imgUrl'))
  create(
    @Body() createStoreDto: CreateStoreDto,
    @UploadedFile() imgUrl: Express.Multer.File,
  ) {
    return this.storeService.create({
      ...createStoreDto,
      imgUrl: imgUrl,
    });
  }
}
