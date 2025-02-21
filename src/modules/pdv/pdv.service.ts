import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePdvDto } from './dto/create-pdv.dto';
import { PdvRepository } from './pdv.repository';
import { UpdatePdvDto } from './dto/update-pdv.dto';

@Injectable()
export class PdvService {
  constructor(private readonly pdvRepository: PdvRepository) {}

  async create(createPdvDto: CreatePdvDto) {
    const pdv = await this.pdvRepository.create(createPdvDto);

    if (!pdv) {
      throw new BadRequestException('Error on create pdv');
    }

    return pdv;
  }

  async findAll() {
    return await this.pdvRepository.findAll();
  }

  async findOne(id: string) {
    return await this.pdvRepository.findOne(id);
  }

  async update(id: string, data: UpdatePdvDto) {
    return await this.pdvRepository.update(id, data);
  }

  async disable(id: string) {
    return await this.pdvRepository.disable(id);
  }
}
