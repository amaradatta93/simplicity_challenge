import {Injectable} from '@angular/core';
import {Vote} from '../models/vote';

@Injectable()
export class VotesService {

  constructor() {
  }

  addVote(vote: Vote) {
    return;
  }

  getByUserId(userId: number): Vote[] {
    return [{id: 1, itemId: 2, userId: 1}, {id: 2, itemId: 3, userId: 2}];
  }

}
