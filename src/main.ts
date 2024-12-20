import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { DiscoveryModule } from './discovery';

async function bootstrap() {
  const app = await NestFactory.create(DiscoveryModule, new FastifyAdapter());
  const port = process.env.PORT || 4000;
  const server = await app.listen(port);
  console.info(`⚡ : ${await app.getUrl()}/discovery`);
  return server;
}

bootstrap();
