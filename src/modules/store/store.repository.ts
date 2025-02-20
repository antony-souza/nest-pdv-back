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
}
