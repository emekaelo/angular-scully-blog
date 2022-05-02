import {Component, Input, OnInit} from '@angular/core';
import {ScullyRoute} from "@scullyio/ng-lib";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() post: Partial<ScullyRoute> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
