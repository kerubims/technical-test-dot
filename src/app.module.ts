import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createObserveModule } from '@nestjs/observe';
import { User } from './auth/entities/user.entity.js';
import { Category } from './categories/entities/category.entity.js';
import { Product } from './products/entities/product.entity.js';
import { AuthModule } from './auth/auth.module.js';
import { CategoriesModule } from './categories/categories.module.js';
import { ProductsModule } from './products/products.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';
import { SeederService } from './database/seeder.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? '',
      appSecret: process.env.OBSERVE_APP_SECRET ?? '',
      runtimeMetrics: !Boolean(process.versions?.['webcontainer']),
      serviceId: 'maganghub-fullstack-mvc',
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'database.sqlite',
      entities: [User, Category, Product],
      synchronize: true,
      logging: false,
    }),
    TypeOrmModule.forFeature([User, Category, Product]),
    AuthModule,
    CategoriesModule,
    ProductsModule,
    DashboardModule,
  ],
  providers: [SeederService],
})
export class AppModule {}
