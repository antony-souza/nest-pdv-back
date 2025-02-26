import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async startingPayment(createPaymentDto: CreatePaymentDto) {
    const payment =
      await this.paymentRepository.startingPayment(createPaymentDto);

    if (!payment) {
      throw new BadRequestException('Payment not created!');
    }

    return payment;
  }

  async findByStatusPayments(status: string) {
    return await this.paymentRepository.findByStatusPayments(status);
  }
}
