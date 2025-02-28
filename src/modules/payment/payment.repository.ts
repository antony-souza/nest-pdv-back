import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './entities/payment.entity';
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentRepository {
  constructor(
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
  ) {}

  async createPayment(dto: CreatePaymentDto): Promise<Payment> {
    const payment = await this.paymentModel.create(dto);

    if (!payment) {
      throw new BadRequestException('Error to create payment');
    }

    return payment;
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
