import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { environment } from './environment/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(environment.port);
  logger.debug(`Server running on http://localhost:${environment.port}`);
}
bootstrap();
