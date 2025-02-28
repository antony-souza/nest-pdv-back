import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  Get,
  Param,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  /* 
  @Post('/startingPayment')
  @UseInterceptors(FileInterceptor(''))
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.startingPayment(createPaymentDto);
  } */

  @Get('/findByStatusPayments/:status')
  findByStatusPayments(@Param('status') status: string) {
    return this.paymentService.findByStatusPayments(status);
  }
}
