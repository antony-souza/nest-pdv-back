import { InjectModel } from '@nestjs/mongoose';
import { Pdv } from './entities/pdv.entity';
import { Model } from 'mongoose';
import { CreatePdvDto } from './dto/create-pdv.dto';
import { ConflictException } from '@nestjs/common';

export class PdvRepository {
  constructor(@InjectModel(Pdv.name) private readonly pdvModel: Model<Pdv>) {}

  async create(data: CreatePdvDto): Promise<Pdv> {
    const checkPdv = await this.pdvModel.findOne({
      box: data.box,
      storeId: data.storeId,
    });

    if (checkPdv) {
      throw new ConflictException('PDV already exists');
    }

    return this.pdvModel.create(data);
  }

  async findAll(): Promise<Pdv[]> {
    return await this.pdvModel.find();
  }

  async findOne(id: string): Promise<Pdv> {
    return await this.pdvModel.findById(id);
  }

  async update(id: string, data: Partial<Pdv>): Promise<Pdv> {
    return await this.pdvModel.findByIdAndUpdate(id, data, { new: true });
  }

  async disable(id: string) {
    return await this.pdvModel.updateOne({ _id: id }, { enabled: false });
  }
}
