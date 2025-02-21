import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environment/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { StoreModule } from './modules/store/store.module';
import { PdvModule } from './modules/pdv/pdv.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongourl),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    StoreModule,
    PdvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
