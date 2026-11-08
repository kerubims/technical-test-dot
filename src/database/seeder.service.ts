import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User } from '../auth/entities/user.entity.js';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeederService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    await this.seedUsers();
  }

  private async seedUsers() {
    const userCount = await this.userRepository.count();
    if (userCount === 0) {
      this.logger.log('Seeding default Admin User...');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = this.userRepository.create({
        username: 'admin',
        email: 'admin@maganghub.id',
        password: hashedPassword,
        role: 'admin',
      });
      await this.userRepository.save(admin);
      this.logger.log('Admin user created: username="admin", password="admin123"');
    }
  }
}
