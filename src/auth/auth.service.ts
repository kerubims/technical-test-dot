import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User } from './entities/user.entity.js';
import { LoginDto } from './dto/login.dto.js';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser(loginDto: LoginDto): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findOne({
      where: { username: loginDto.username },
    });

    if (!user) {
      throw new UnauthorizedException('Username atau password salah.');
    }

    const isMatch = await bcrypt.compare(loginDto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Username atau password salah.');
    }

    const { password, ...result } = user;
    return result;
  }
}

