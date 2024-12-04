import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const server = express();

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors({
    origin: ['http://localhost:3000', 'http://192.168.68.103:3000', 'https://liteflix-fe.vercel.app'],
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type',
  });

  await app.init();

  const port = process.env.PORT || 3001;
  server.listen(port);
}

bootstrap();
