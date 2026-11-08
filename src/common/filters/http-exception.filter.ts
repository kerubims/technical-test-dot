import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (response.headersSent) {
      return;
    }

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : null;

    let message = 'Terjadi kesalahan pada server.';
    if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    } else if (
      exceptionResponse &&
      typeof exceptionResponse === 'object' &&
      (exceptionResponse as any).message
    ) {
      const msg = (exceptionResponse as any).message;
      message = Array.isArray(msg) ? msg.join(', ') : msg;
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    this.logger.error(
      `[${request.method}] ${request.url} - Status ${status} - Error: ${message}`,
    );

    const acceptHeader = request.get('Accept') || '';
    const wantsJson =
      acceptHeader.includes('application/json') ||
      request.xhr ||
      request.path.startsWith('/api');

    if (wantsJson) {
      return response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message,
      });
    }

    if (status === HttpStatus.NOT_FOUND) {
      return response.status(status).render('errors/404', {
        title: '404 - Halaman Tidak Ditemukan',
        path: request.url,
        message: 'Halaman atau data yang Anda cari tidak ditemukan.',
        user: (request as any).session?.user || null,
      });
    }

    return response.status(status).render('errors/500', {
      title: `${status} - Terjadi Kesalahan`,
      statusCode: status,
      path: request.url,
      message,
      user: (request as any).session?.user || null,
    });
  }
}

