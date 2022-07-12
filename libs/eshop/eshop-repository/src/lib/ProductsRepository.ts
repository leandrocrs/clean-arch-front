import { Product } from '@eshop/entity';

export interface ProductsRepository {
  getAll(): Promise<Product[]>;

  add(product: Product): Promise<Product>;

  update(skuCode: string, product: Product): Promise<Product>;

  delete(skuCode: string): Promise<Product>;

  findBySku(skuCode: string): Promise<Product | undefined>;
}
