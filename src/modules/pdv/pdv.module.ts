import { Module } from '@nestjs/common';
import { PdvService } from './pdv.service';
import { PdvController } from './pdv.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from '../store/entities/store.entity';
import { Pdv, PdvSchema } from './entities/pdv.entity';
import { PdvRepository } from './pdv.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
    MongooseModule.forFeature([{ name: Pdv.name, schema: PdvSchema }]),
  ],
  controllers: [PdvController],
  providers: [PdvService, PdvRepository],
})
export class PdvModule {}
