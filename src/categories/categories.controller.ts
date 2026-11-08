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
import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import { AuthGuard } from '../common/guards/auth.guard.js';
import { sendResponse } from '../common/utils/response.helper.js';

@Controller('categories')
@UseGuards(AuthGuard)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // 1. GET /categories (List & Search)
  @Get()
  async findAll(
    @Query('search') search: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const categories = await this.categoriesService.findAll(search);
    return sendResponse(req, res, {
      view: 'categories/index',
      viewData: {
        title: 'Kategori',
        categories,
        search: search || '',
      },
      jsonData: {
        count: categories.length,
        categories,
      },
    });
  }

  // 2. GET /categories/create (Render Form Tambah Kategori)
  @Get('create')
  renderCreateForm(@Req() req: Request, @Res() res: Response) {
    return sendResponse(req, res, {
      view: 'categories/form',
      viewData: {
        title: 'Tambah Kategori',
        isEdit: false,
        category: {},
      },
      jsonData: { message: 'Gunakan method POST /categories untuk menambah data' },
    });
  }

  // 3. POST /categories (Create Kategori Baru)
  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const created = await this.categoriesService.create(createCategoryDto);
    return sendResponse(req, res, {
      view: '',
      viewData: {},
      jsonData: {
        message: 'Kategori berhasil ditambahkan',
        category: created,
      },
      statusCode: 201,
      redirectUrl: '/categories?success=Kategori berhasil ditambahkan',
    });
  }

  // 4. GET /categories/:id (Detail Kategori & Produk Terkait)
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const category = await this.categoriesService.findOne(id);
    return sendResponse(req, res, {
      view: 'categories/detail',
      viewData: {
        title: category.name,
        category,
        products: category.products || [],
      },
      jsonData: {
        category,
        products: category.products || [],
      },
    });
  }

  // 5. GET /categories/:id/edit (Render Form Edit)
  @Get(':id/edit')
  async renderEditForm(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const category = await this.categoriesService.findOne(id);
    return sendResponse(req, res, {
      view: 'categories/form',
      viewData: {
        title: 'Edit Kategori',
        isEdit: true,
        category,
      },
      jsonData: { category },
    });
  }

  // 6. PUT /categories/:id (Update Kategori)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const updated = await this.categoriesService.update(id, updateCategoryDto);
    return sendResponse(req, res, {
      view: '',
      viewData: {},
      jsonData: {
        message: 'Kategori berhasil diperbarui',
        category: updated,
      },
      redirectUrl: `/categories/${id}?success=Kategori berhasil diperbarui`,
    });
  }

  // 7. DELETE /categories/:id (Hapus Kategori)
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    await this.categoriesService.remove(id);
    return sendResponse(req, res, {
      view: '',
      viewData: {},
      jsonData: {
        message: `Kategori dengan ID ${id} berhasil dihapus`,
      },
      redirectUrl: '/categories?success=Kategori berhasil dihapus',
    });
  }
}

