import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/utils/all-exception-filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    methods: '*',
    origin: '*',
    allowedHeaders: '*',
    exposedHeaders: '*',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Guess number game')
    .setDescription('The Guess number game API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/swagger', app, document);
  //end of swagger
  await app.listen(process.env.NODE_DOCKER_PORT);
}
bootstrap();
