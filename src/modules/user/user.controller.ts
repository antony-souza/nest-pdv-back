import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('imgUrl'))
  create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() imgUrl: Express.Multer.File,
  ) {
    return this.userService.create({
      ...createUserDto,
      imgUrl: imgUrl,
    });
  }
}
