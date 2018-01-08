import { Component, OnInit } from '@angular/core';

import { LeaderService } from '../services/leader.service';

import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  LEADERS: Leader[];

  constructor(private leaderservice: LeaderService) { }

  ngOnInit() {
    this.LEADERS = this.leaderservice.getLeaders();
  }

}
