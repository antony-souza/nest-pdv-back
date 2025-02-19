import { Injectable } from '@nestjs/common';
import { ImgurUploadService } from './imgur-upload.service';
import { environment } from 'src/environment/environment';

@Injectable()
export default class UploadFileFactoryService {
  private readonly UPLOAD_SERVICE_TYPE;
  private readonly imgurUploadService: ImgurUploadService;

  constructor() {
    if (process.env.UPLOAD_SERVICE_TYPE) {
      this.UPLOAD_SERVICE_TYPE = environment.uploadServiceType;
    }

    this.imgurUploadService = new ImgurUploadService();
  }

  async upload(file: Express.Multer.File): Promise<string | undefined> {
    if (this.UPLOAD_SERVICE_TYPE === environment.uploadServiceType) {
      return await this.imgurUploadService.upload(file);
    }
  }
}
