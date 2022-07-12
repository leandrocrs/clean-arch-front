import { ShoppingCartRepository } from '@eshop/repository';
import { UseCaseError } from '../UserCaseError';

export class RemoveFromCartUseCaseError extends UseCaseError {
  constructor(message: string) {
    super('RemoveFromCart', message);
  }
}

export class RemoveFromCartUseCase {
  private shoppingCartRepository: ShoppingCartRepository;

  constructor(shoppingCartRepository: ShoppingCartRepository) {
    this.shoppingCartRepository = shoppingCartRepository;
  }

  async removeFromCart(skuCode: string) {
    try {
      return await this.shoppingCartRepository.remove(skuCode);
    } catch {
      throw new RemoveFromCartUseCaseError(
        `Was not possible remove product sku ${skuCode} from repository`
      );
    }
  }
}
