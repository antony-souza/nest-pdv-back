import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './entities/payment.entity';
import { Model } from 'mongoose';
import { Store } from '../store/entities/store.entity';
import { Pdv } from '../pdv/entities/pdv.entity';
import { Product } from '../product/entities/product.entity';
import { User } from '../user/entities/user.entity';
import { BadRequestException } from '@nestjs/common';

export class PaymentRepository {
  constructor(
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
    @InjectModel(Store.name) private readonly storeModel: Model<Store>,
    @InjectModel(Pdv.name) private readonly pdvModel: Model<Pdv>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async startingPayment(data: Payment): Promise<Payment> {
    const [store, pdv, product, user] = await Promise.all([
      this.storeModel.findById(data.storeId),
      this.pdvModel.findById(data.pdvId),
      this.productModel.findById(data.productId),
      this.userModel.findById(data.userId),
    ]);

    if (!store || !pdv || !product || !user) {
      throw new BadRequestException('Invalid data');
    }

    return await this.paymentModel.create({
      ...data,
      storeName: store.name,
      pdvBox: pdv.box,
      productName: product.name,
      userName: user.name,
      pendingValue: product.price * data.quantity,
    });
  }

  async findByStatusPayments(status: string): Promise<Payment[]> {
    return await this.paymentModel.aggregate([
      {
        $match: {
          status: status,
        },
      },
      {
        $project: {
          _id: 1,
          storeName: 1,
          pdvBox: 1,
          productName: 1,
          userName: 1,
          quantity: 1,
          pendingValue: 1,
          status: 1,
          DataHora: {
            $dateToString: {
              format: '%d-%m-%Y, %H:%M:%S',
              timezone: 'America/Sao_Paulo',
              date: '$createdAt',
            },
          },
        },
      },
    ]);
  }
}
