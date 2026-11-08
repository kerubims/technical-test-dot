import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Category } from './entities/category.entity.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(search?: string): Promise<Category[]> {
    if (search && search.trim() !== '') {
      return this.categoryRepository.find({
        where: [
          { name: Like(`%${search.trim()}%`) },
          { description: Like(`%${search.trim()}%`) },
        ],
        relations: { products: true },
        order: { id: 'DESC' },
      });
    }

    return this.categoryRepository.find({
      relations: { products: true },
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: { products: true },
    });

    if (!category) {
      throw new NotFoundException(`Kategori dengan ID ${id} tidak ditemukan.`);
    }

    return category;
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.findOne(id);
    Object.assign(category, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await this.categoryRepository.remove(category);
  }

  async count(): Promise<number> {
    return this.categoryRepository.count();
  }
}
