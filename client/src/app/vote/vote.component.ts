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
    console.log(this.voteItem);
  }

  addVote(userId: number): void {
    console.log('adding vote  for ' + this.voteItem.id + ', userId: ' + userId);
    return this.votesService.addVote({itemId: this.voteItem.id, userId: userId, id: null});
  }
}
