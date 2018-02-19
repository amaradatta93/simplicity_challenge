import {Injectable} from '@angular/core';
import {Item} from '../models/item';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) {
  }

  private itemsUrl = 'api/items/';

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      map(res => res.items),
      map(items => items.map(item => new Item(item.pk, item.name, item.total_votes)))
    );
  }
}

