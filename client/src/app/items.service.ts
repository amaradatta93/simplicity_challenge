import {Injectable} from '@angular/core';
import {Item} from './models/item';

@Injectable()
export class ItemsService {

  constructor() {
  }

  getItems(): Item[] {
    return [{id: 1, name: 'Apple', votes: 2}, {id: 2, name: 'Pineapple', votes: 10}];
  }
}

