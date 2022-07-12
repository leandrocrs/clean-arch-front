import { OrderItem, Product } from '@eshop/entity';

export interface ShoppingCartRepository {
  getAll(): Promise<OrderItem[]>;
  addProduct(product: Product, quantity: number): Promise<OrderItem>;
  updateQuantity(productSku: string, quantity: number): Promise<OrderItem>;
  remove(skuCode: string): Promise<OrderItem>;
}
