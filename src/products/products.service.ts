import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(search?: string, categoryId?: number): Promise<Product[]> {
    const query = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .orderBy('product.id', 'DESC');

    if (search && search.trim() !== '') {
      const term = `%${search.trim()}%`;
      query.andWhere(
        '(product.name LIKE :term OR product.sku LIKE :term OR product.description LIKE :term)',
        { term },
      );
    }

    if (categoryId && !isNaN(categoryId)) {
      query.andWhere('product.categoryId = :categoryId', { categoryId });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { category: true },
    });

    if (!product) {
      throw new NotFoundException(`Produk dengan ID ${id} tidak ditemukan.`);
    }

    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create({
      ...createProductDto,
      price: Number(createProductDto.price),
      stock: Number(createProductDto.stock),
      categoryId: Number(createProductDto.categoryId),
    });
    return this.productRepository.save(product);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, {
      ...updateProductDto,
      price: Number(updateProductDto.price),
      stock: Number(updateProductDto.stock),
      categoryId: Number(updateProductDto.categoryId),
    });
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  async count(): Promise<number> {
    return this.productRepository.count();
  }

  async findRecent(limit = 5): Promise<Product[]> {
    return this.productRepository.find({
      relations: { category: true },
      order: { id: 'DESC' },
      take: limit,
    });
  }
}
