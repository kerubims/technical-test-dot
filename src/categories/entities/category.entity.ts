import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  type Relation,
} from 'typeorm';
import type { Product } from '../../products/entities/product.entity.js';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany('Product', 'category', {
    cascade: true,
  })
  products: Relation<Product[]>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
