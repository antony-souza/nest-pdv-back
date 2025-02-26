import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './environment/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { StoreModule } from './modules/store/store.module';
import { PdvModule } from './modules/pdv/pdv.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { PaymentModule } from './modules/payment/payment.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongourl),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    StoreModule,
    PdvModule,
    UserModule,
    CategoryModule,
    PaymentModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
