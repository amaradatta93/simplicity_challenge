import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../models/item';
import {VotesService} from '../services/votes.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input('voteItem') voteItem: Item;

  constructor(private votesService: VotesService) {
  }

  ngOnInit() {
  }

  addVote(userId: number): void {
    // When a vote is successfully added, notify subscribers
    this.votesService.addVote({itemId: this.voteItem.id, userId: userId, id: null})
      .subscribe(() => {
        this.votesService.VoteIsAdded.next(true);
      });
  }
}
