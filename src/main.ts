import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const express = require('express');
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

  app.enableCors({
    origin: ['http://localhost:3000','https://liteflix-fe.vercel.app'],
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type',
  });

  await app.listen(3001);
}
bootstrap();
