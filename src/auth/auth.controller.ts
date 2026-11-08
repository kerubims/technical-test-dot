import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  Query,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { sendResponse } from '../common/utils/response.helper.js';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  getLoginPage(
    @Req() req: Request,
    @Res() res: Response,
    @Query('error') error?: string,
  ) {
    const session = (req as any).session;
    if (session && session.user) {
      return res.redirect('/dashboard');
    }

    return sendResponse(req, res, {
      view: 'auth/login',
      viewData: {
        title: 'Login - Admin Panel',
        layout: false,
        error,
      },
      jsonData: { message: 'Silakan lakukan login dengan metode POST /login' },
    });
  }

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const user = await this.authService.validateUser(loginDto);
      (req as any).session.user = user;

      return sendResponse(req, res, {
        view: '',
        viewData: {},
        jsonData: {
          message: 'Login berhasil',
          user,
        },
        redirectUrl: '/dashboard',
      });
    } catch (err: any) {
      return sendResponse(req, res, {
        view: 'auth/login',
        viewData: {
          title: 'Login - Admin Panel',
          layout: false,
          error: err.message || 'Login gagal',
          username: loginDto.username,
        },
        jsonData: {
          message: err.message || 'Login gagal',
        },
        statusCode: 401,
      });
    }
  }

  @Get('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    (req as any).session.destroy(() => {
      return sendResponse(req, res, {
        view: '',
        viewData: {},
        jsonData: { message: 'Logout berhasil' },
        redirectUrl: '/login',
      });
    });
  }

  @Post('logout')
  postLogout(@Req() req: Request, @Res() res: Response) {
    return this.logout(req, res);
  }
}

