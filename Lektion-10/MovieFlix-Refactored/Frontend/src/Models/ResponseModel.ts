import { IMedia } from './IMedia';
import { PaginationType } from './PaginationType';

export class ResponseModel {
  // Privata fält...
  /* STATE!!! */
  private _data: IMedia[] = [];
  private _pagination: PaginationType = { page: 1, totalPages: 500 };

  constructor(data: IMedia[], page: number, totalPages: number) {
    this._data = data;
    this._pagination.page = page || 1;
    this._pagination.totalPages = totalPages || 500;
  }

  /* Skapar beteende | Behaviour manipulerar tillståndet i objektet */
  // Properties
  get data() {
    return this._data;
  }

  get pagination() {
    return this._pagination;
  }
}
