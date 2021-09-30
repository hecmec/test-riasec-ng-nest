import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // open generic CORS only in DEV
  app.enableCors());
  await app.listen(3000);
}
bootstrap();
