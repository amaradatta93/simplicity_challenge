import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../services/items.service';
import {Item} from '../models/item';
import {VotesService} from '../services/votes.service';
import _ = require('lodash');

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemsService,
              private voteService: VotesService) {
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.sortItems();
    });
  }

  private sortItems(): void {
    this.items = _.sortBy(this.items, 'votes').reverse();
  }

  ngOnInit() {
    this.getItems();

    // Every time a vote has been added, refresh the list of items by fetching
    // from the backend
    this.voteService.VoteIsAdded.subscribe(() => this.getItems());
  }

}
