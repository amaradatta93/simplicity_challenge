import {Injectable} from '@angular/core';
import {Vote} from '../models/vote';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VotesService {

  constructor(private httpClient: HttpClient) {
  }

  private itemsUrl = 'api/polls/';

  addVote(vote: Vote) {
    const url: string = this.itemsUrl + vote.itemId; // api/polls/1

    return this.httpClient.post(url, {student_id: vote.userId});
  }

  getByUserId(userId: number): Vote[] {
    return null;
  }

}
