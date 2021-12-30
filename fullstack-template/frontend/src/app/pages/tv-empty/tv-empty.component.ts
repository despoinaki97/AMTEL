import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ami-fullstack-tv-empty',
  templateUrl: './tv-empty.component.html',
  styleUrls: ['./tv-empty.component.scss']
})
export class TvEmptyComponent implements OnInit {
  course:string;
  constructor() { }

  ngOnInit() {
    this.course="HY469 Room"
  }

}
