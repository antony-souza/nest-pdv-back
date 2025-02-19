import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PdvService } from './pdv.service';
import { CreatePdvDto } from './dto/create-pdv.dto';
import { UpdatePdvDto } from './dto/update-pdv.dto';

@Controller('pdv')
export class PdvController {
  constructor(private readonly pdvService: PdvService) {}

  @Post()
  create(@Body() createPdvDto: CreatePdvDto) {
    return this.pdvService.create(createPdvDto);
  }

  @Get()
  findAll() {
    return this.pdvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pdvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePdvDto: UpdatePdvDto) {
    return this.pdvService.update(+id, updatePdvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pdvService.remove(+id);
  }
}
