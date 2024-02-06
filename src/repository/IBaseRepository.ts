export interface IBaseRepository<T> {
  findById(id: string): Promise<T | undefined>;
}
