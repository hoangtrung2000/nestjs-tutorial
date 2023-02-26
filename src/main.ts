import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // invalid properties are automatically stripped out and remove when POST requests
      transform: true,
      forbidNonWhitelisted: true, //stop the request from processing and throw error
    }),
  );
  await app.listen(3000);
}
bootstrap();
