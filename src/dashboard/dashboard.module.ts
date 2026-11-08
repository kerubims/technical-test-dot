import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller.js';
import { CategoriesModule } from '../categories/categories.module.js';
import { ProductsModule } from '../products/products.module.js';

@Module({
  imports: [CategoriesModule, ProductsModule],
  controllers: [DashboardController],
})
export class DashboardModule {}

