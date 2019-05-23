export abstract class Service<T> {
  public abstract delete(item: T): void;
}