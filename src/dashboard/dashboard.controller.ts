import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CategoriesService } from '../categories/categories.service.js';
import { ProductsService } from '../products/products.service.js';
import { AuthGuard } from '../common/guards/auth.guard.js';
import { sendResponse } from '../common/utils/response.helper.js';

@Controller()
@UseGuards(AuthGuard)
export class DashboardController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService,
  ) {}

  @Get()
  root(@Res() res: Response) {
    return res.redirect('/dashboard');
  }

  @Get('dashboard')
  async getDashboard(@Req() req: Request, @Res() res: Response) {
    const [totalCategories, totalProducts, recentProducts] = await Promise.all([
      this.categoriesService.count(),
      this.productsService.count(),
      this.productsService.findRecent(5),
    ]);

    return sendResponse(req, res, {
      view: 'dashboard/index',
      viewData: {
        title: 'Dashboard',
        stats: {
          totalCategories,
          totalProducts,
        },
        recentProducts,
      },
      jsonData: {
        stats: {
          totalCategories,
          totalProducts,
        },
        recentProducts,
      },
    });
  }
}

