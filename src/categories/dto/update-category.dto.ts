import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty({ message: 'Nama kategori wajib diisi' })
  @MaxLength(100, { message: 'Nama kategori maksimal 100 karakter' })
  name: string;

  @IsOptional()
  @MaxLength(255, { message: 'Deskripsi maksimal 255 karakter' })
  description?: string;
}

