import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Get,
  Put,
} from '@nestjs/common';
import { PdvService } from './pdv.service';
import { CreatePdvDto } from './dto/create-pdv.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdatePdvDto } from './dto/update-pdv.dto';

@Controller('/pdv')
export class PdvController {
  constructor(private readonly pdvService: PdvService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor(''))
  create(@Body() createPdvDto: CreatePdvDto) {
    return this.pdvService.create(createPdvDto);
  }

  @Get('/all')
  findAll() {
    return this.pdvService.findAll();
  }

  @Get('/:id')
  findOne(id: string) {
    return this.pdvService.findOne(id);
  }

  @Put('/update/:id')
  update(id: string, @Body() data: UpdatePdvDto) {
    return this.pdvService.update(id, data);
  }

  @Put('/disable/:id')
  disable(id: string) {
    return this.pdvService.disable(id);
  }
}
