import { Product } from '@eshop/entity';
import { ShoppingCartRepository } from '@eshop/repository';
import { UseCaseError } from '../UserCaseError';

export class AddProductToCartUseCaseError extends UseCaseError {
  constructor(message: string) {
    super('AddProductToCart', message);
  }
}

export class AddProductToCartUseCase {
  private cartRepository: ShoppingCartRepository;

  constructor(cartRepository: ShoppingCartRepository) {
    this.cartRepository = cartRepository;
  }

  async addToCart(product: Product, quantity: number) {
    try {
      return await this.cartRepository.addProduct(product, quantity);
    } catch {
      throw new AddProductToCartUseCaseError(
        `Could not add product sku: ${product.skuCode} to shopping cart`
      );
    }
  }
}
