import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  username: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;
}

