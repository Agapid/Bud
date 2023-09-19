import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * эта строка добавляет ко всем маршрутам префикс api, чтобы в строке браузера было не так:
   * http://localhost:3000/profile
   * а так:
   * http://localhost:3000/api/profile
   *
   * 
  */
  app.setGlobalPrefix('api');

  app.enableCors(); //чтобь не было каких-то конфлитктов на стороне сервера. Наверное, всегда должна быть эта строка во всех приложениях
  await app.listen(3000);
}
bootstrap();
