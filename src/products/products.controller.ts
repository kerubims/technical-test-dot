import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Req,
  Res,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ProductsService } from './products.service.js';
import { CategoriesService } from '../categories/categories.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { AuthGuard } from '../common/guards/auth.guard.js';
import { sendResponse } from '../common/utils/response.helper.js';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly categoriesService: CategoriesService,
  ) {}

  // 1. GET /products (List, Search & Filter Kategori)
  @Get()
  async findAll(
    @Query('search') search: string,
    @Query('categoryId') categoryId: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const catIdNum = categoryId ? parseInt(categoryId, 10) : undefined;
    const [products, categories] = await Promise.all([
      this.productsService.findAll(search, catIdNum),
      this.categoriesService.findAll(),
    ]);

    return sendResponse(req, res, {
      view: 'products/index',
      viewData: {
        title: 'Produk',
        products,
        categories,
        search: search || '',
        selectedCategoryId: catIdNum || '',
      },
      jsonData: {
        count: products.length,
        products,
      },
    });
  }

  // 2. GET /products/create (Form Tambah Produk)
  @Get('create')
  async renderCreateForm(@Req() req: Request, @Res() res: Response) {
    const categories = await this.categoriesService.findAll();
    return sendResponse(req, res, {
      view: 'products/form',
      viewData: {
        title: 'Tambah Produk',
        isEdit: false,
        product: {},
        categories,
      },
      jsonData: {
        message: 'Gunakan method POST /products untuk membuat produk baru',
        categories,
      },
    });
  }

  // 3. POST /products (Create Produk Baru)
  @Post()
  async create(
    @Body() createProductDto: CreateProductDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const created = await this.productsService.create(createProductDto);
    return sendResponse(req, res, {
      view: '',
      viewData: {},
      jsonData: {
        message: 'Produk berhasil ditambahkan',
        product: created,
      },
      statusCode: 201,
      redirectUrl: '/products?success=Produk berhasil ditambahkan',
    });
  }

  // 4. GET /products/:id (Detail Produk & Kategori Induk)
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const product = await this.productsService.findOne(id);
    return sendResponse(req, res, {
      view: 'products/detail',
      viewData: {
        title: product.name,
        product,
      },
      jsonData: { product },
    });
  }

  // 5. GET /products/:id/edit (Form Edit Produk)
  @Get(':id/edit')
  async renderEditForm(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const [product, categories] = await Promise.all([
      this.productsService.findOne(id),
      this.categoriesService.findAll(),
    ]);

    return sendResponse(req, res, {
      view: 'products/form',
      viewData: {
        title: 'Edit Produk',
        isEdit: true,
        product,
        categories,
      },
      jsonData: { product, categories },
    });
  }

  // 6. PUT /products/:id (Update Produk)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const updated = await this.productsService.update(id, updateProductDto);
    return sendResponse(req, res, {
      view: '',
      viewData: {},
      jsonData: {
        message: 'Produk berhasil diperbarui',
        product: updated,
      },
      redirectUrl: `/products/${id}?success=Produk berhasil diperbarui`,
    });
  }

  // 7. DELETE /products/:id (Hapus Produk)
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.productsService.remove(id);
    return sendResponse(req, res, {
      view: '',
      viewData: {},
      jsonData: {
        message: `Produk dengan ID ${id} berhasil dihapus`,
      },
      redirectUrl: '/products?success=Produk berhasil dihapus',
    });
  }
}

