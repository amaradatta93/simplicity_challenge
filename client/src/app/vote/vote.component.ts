import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() itemId: number;

  constructor() {
  }

  ngOnInit() {
  }
}
