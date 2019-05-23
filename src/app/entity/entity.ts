import { Service } from 'src/app/shared/services/service';


export class Entity<T> {

  constructor(private _service: Service<T>) { }

  public delete(item: T) {
    this._service.delete(item);
  }
}
