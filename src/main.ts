import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ApiGuard } from './api/api.guard';
// import { doubleCsrf } from 'csrf-csrf';

async function bootstrap() {
  // const doubleCsrfUtilities = doubleCsrf({
  //   getSecret: () => 'secret',
  // });
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new ApiGuard());
  app.use(helmet());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
