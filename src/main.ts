import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe, Logger } from '@nestjs/common';
import { join } from 'path';
import session from 'express-session';
import hbs from 'hbs';
import { AppModule, ObserveInstrument } from './app.module.js';
import { HttpExceptionFilter } from './common/filters/http-exception.filter.js';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    instrument: ObserveInstrument,
  });

  // 1. Static Assets & Views Configuration (Server-Side Rendering MVC)
  const viewsPath = join(import.meta.dirname, '..', 'views');
  const partialsPath = join(viewsPath, 'partials');
  const publicPath = join(import.meta.dirname, '..', 'public');

  app.useStaticAssets(publicPath);
  app.setBaseViewsDir(viewsPath);
  app.setViewEngine('hbs');
  app.set('view options', { layout: 'layouts/main' });

  // Daftarkan Partials HBS
  hbs.registerPartials(partialsPath);

  // Helper Handlebars
  hbs.registerHelper('eq', (a, b) => String(a) === String(b));
  hbs.registerHelper('formatRupiah', (val) => {
    const num = Number(val) || 0;
    return 'Rp ' + num.toLocaleString('id-ID');
  });
  hbs.registerHelper('formatDate', (date) => {
    if (!date) return '-';
    return new Date(date).toLocaleString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  });
  hbs.registerHelper('json', (context) => JSON.stringify(context));

  // 2. Flash Query Message Middleware (Menangkap ?success=... & ?error=...)
  app.use((req: any, res: any, next: any) => {
    res.locals.success = req.query.success || null;
    res.locals.error = req.query.error || null;
    res.locals.currentPath = req.path;
    next();
  });

  // 3. Session Configuration
  app.use(
    session({
      secret: 'technical-test-maganghub-2026-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 1 hari
        httpOnly: true,
      },
    }),
  );

  // 4. Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // 5. Global Exception Filter (Error Handling kustom)
  app.useGlobalFilters(new HttpExceptionFilter());

  const port = process.env.PORT || 3000;
  await app.listen(port);

  logger.log(`====================================================`);
  logger.log(`Aplikasi Admin Panel Maganghub Berhasil Aktif!`);
  logger.log(`Akses Browser  : http://localhost:${port}`);
  logger.log(`Akun Default   : username="admin", password="admin123"`);
  logger.log(`====================================================`);
}
await bootstrap();
