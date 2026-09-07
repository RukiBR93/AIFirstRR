import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // v1: liberar para o app web local; restringir depois
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
