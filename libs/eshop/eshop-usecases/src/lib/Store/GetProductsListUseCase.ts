import { ProductsRepository } from '@eshop/repository';
import { UseCaseError } from '../UserCaseError';

export class GetProductsListUseCaseError extends UseCaseError {
  constructor(message: string) {
    super('GetProductsList', message);
  }
}

export class GetProductsListUseCase {
  private productsRepository: ProductsRepository;

  constructor(repository: ProductsRepository) {
    this.productsRepository = repository;
  }

  async getProducts() {
    try {
      return await this.productsRepository.getAll();
    } catch {
      throw new GetProductsListUseCaseError(
        'Could not fetch products from repository.'
      );
    }
  }
}
