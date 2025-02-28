import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentRepository } from './payment.repository';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepository: PaymentRepository) {}

  async createPayment(dto: CreatePaymentDto) {
    const payment = await this.paymentRepository.createPayment(dto);

    if (!payment) {
      throw new BadRequestException('Error to create payment');
    }
  }

  async findByStatusPayments(status: string) {
    return await this.paymentRepository.findByStatusPayments(status);
  }
}
