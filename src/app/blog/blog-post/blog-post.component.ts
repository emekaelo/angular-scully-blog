import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {
  currentRoute: ScullyRoute = {} as ScullyRoute;
  onDestroy$ = new Subject<void>();

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.getCurrentPost()
  }

  getCurrentPost() {
    this.scully.getCurrent()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((routeData: ScullyRoute) => {
        this.currentRoute = routeData;
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
