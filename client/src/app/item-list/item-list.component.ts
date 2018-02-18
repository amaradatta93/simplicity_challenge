import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../services/items.service';
import {Item} from '../models/item';
import _ = require('lodash');
import {VoteComponent} from '../vote/vote.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  directives: [VoteComponent]
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemsService) {
  }

  getItems(): void {
    this.items = _.sortBy(this.itemService.getItems(), 'votes').reverse();
  }

  ngOnInit() {
    this.getItems();
  }

}
