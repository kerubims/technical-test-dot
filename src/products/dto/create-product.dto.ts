import { IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsNotEmpty({ message: 'SKU produk wajib diisi' })
  sku: string;

  @IsNotEmpty({ message: 'Nama produk wajib diisi' })
  name: string;

  @IsOptional()
  description?: string;

  @IsNotEmpty({ message: 'Harga produk wajib diisi' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Harga harus berupa angka' })
  @Min(0, { message: 'Harga minimal 0' })
  price: number;

  @IsNotEmpty({ message: 'Stok produk wajib diisi' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Stok harus berupa angka' })
  @Min(0, { message: 'Stok minimal 0' })
  stock: number;

  @IsNotEmpty({ message: 'Kategori produk wajib dipilih' })
  @Type(() => Number)
  @IsNumber({}, { message: 'Kategori tidak valid' })
  categoryId: number;
}

