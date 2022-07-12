export class UseCaseError extends Error {
  constructor(
    /**
     * Use case name prefix.
     * Example: If the use case name is `GetProductsUseCase`, pass only `GetProducts`
     */
    userCaseName: string,
    message: string
  ) {
    super(message);
    this.name = `${userCaseName}UseCaseError`;
  }
}
