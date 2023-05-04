import {NestFactory} from '@nestjs/core';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '*',
    allowedHeaders: [
      // default
      'Accept',
      'Authorization',
      'Content-Type',
      'If-None-Match',
    ],
    maxAge: 600,
  });

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
