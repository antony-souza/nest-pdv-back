import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Get,
  Put,
  Param,
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

  @Get('/all')
  findAll() {
    return this.storeService.findAll();
  }

  @Get('/find/:id')
  findOne(id: string) {
    return this.storeService.findOne(id);
  }

  @Put('/update/:id')
  @UseInterceptors(FileInterceptor('imgUrl'))
  update(
    @Param('id') id: string,
    @Body() updateStoreDto: CreateStoreDto,
    @UploadedFile() imgUrl: Express.Multer.File,
  ) {
    return this.storeService.update(id, {
      ...updateStoreDto,
      imgUrl: imgUrl,
    });
  }
}
