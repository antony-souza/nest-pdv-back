import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import UploadFileFactoryService from 'src/utils/uploads/upload-file.service';
import { genericHashPassword } from 'src/utils/hashpass';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly uploadImg: UploadFileFactoryService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let imgUrl = '';

    if (createUserDto.imgUrl) {
      imgUrl = await this.uploadImg.upload(createUserDto.imgUrl);
    }

    const passwordHash = await genericHashPassword(createUserDto.password);

    return await this.userRepository.create({
      ...createUserDto,
      imgUrl: imgUrl,
      password: passwordHash,
    });
  }
}
