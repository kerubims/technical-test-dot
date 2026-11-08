import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  type Relation,
} from 'typeorm';
import type { Category } from '../../categories/entities/category.entity.js';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sku: string;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ nullable: true })
  categoryId: number;

  @ManyToOne('Category', 'products', {
    onDelete: 'SET NULL',
    eager: true,
  })
  @JoinColumn({ name: 'categoryId' })
  category: Relation<Category>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
