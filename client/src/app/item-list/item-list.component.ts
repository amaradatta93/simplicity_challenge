import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../services/items.service';
import {Item} from '../models/item';
import _ = require('lodash');

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemsService) {
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = _.sortBy(items, 'votes').reverse();
    });
  }

  ngOnInit() {
    this.getItems();
  }

}
