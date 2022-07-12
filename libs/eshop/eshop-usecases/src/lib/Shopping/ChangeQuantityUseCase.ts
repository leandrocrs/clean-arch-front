import { ShoppingCartRepository } from '@eshop/repository';
import { UseCaseError } from '../UserCaseError';

export class ChangeQuantityUseCaseError extends UseCaseError {
  constructor(message: string) {
    super('ChangeQuantityUse', message);
  }
}

export class ChangeQuantityUseCase {
  private cartRepository: ShoppingCartRepository;

  constructor(cartRepository: ShoppingCartRepository) {
    this.cartRepository = cartRepository;
  }

  async changeQuantity(skuCode: string, quantity: number) {
    try {
      return await this.cartRepository.updateQuantity(skuCode, quantity);
    } catch {
      throw new ChangeQuantityUseCaseError(
        `Was impossible change product sku: ${skuCode} to quantity ${quantity}`
      );
    }
  }
}
