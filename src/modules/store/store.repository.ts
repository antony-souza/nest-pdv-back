import { InjectModel } from '@nestjs/mongoose';
import { Store } from './entities/store.entity';
import { Model } from 'mongoose';
import { CreateSaleDto } from '../sale/dto/create-sale.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreRepository {
  constructor(
    @InjectModel(Store.name) private readonly storeModel: Model<Store>,
  ) {}

  async create(store: CreateSaleDto): Promise<Store> {
    return this.storeModel.create(store);
  }

  async findAll(): Promise<Store[]> {
    return await this.storeModel.find();
  }

  async findOne(id: string): Promise<Store> {
    return await this.storeModel.findById(id);
  }

  async update(id: string, store: Partial<Store>): Promise<Store> {
    return await this.storeModel.findByIdAndUpdate(id, store, { new: true });
  }

  async disable(id: string) {
    return await this.storeModel.updateOne({ _id: id }, { enabled: false });
  }
}
