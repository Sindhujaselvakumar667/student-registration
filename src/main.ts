import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Student Registration APIS')
    .setDescription('APIs details for student registeration')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  // Create a Swagger document
  const document = SwaggerModule.createDocument(app, config, options);

  // Serve the Swagger documentation using Swagger UI
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
