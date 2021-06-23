import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

const port = process.env.PORT || 5000;
async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Test Backend Example')
    .setVersion('1.0')
    .addTag('REST')
    .build();

  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();
  await app.listen(port);
}
bootstrap();
