import { Component, OnInit } from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.getPublishedPosts();
  }

  getPublishedPosts() {
    this.links$ = this.links$.pipe(map((links) => links.filter((link) =>
      link.route.startsWith('/blog/'))));
  }
}
