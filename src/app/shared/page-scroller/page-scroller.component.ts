import { Component, HostListener, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-page-scroller',
  templateUrl: './page-scroller.component.html',
  styleUrls: ['./page-scroller.component.scss']
})
export class PageScrollerComponent implements OnInit {

  public containerVisible = false;

  constructor(private pageScrollService: PageScrollService, 
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }

  scrollToTopSmooth() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#top'
    });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    // //In chrome and some browser scroll is given to body tag
    // let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    // let max = document.documentElement.scrollHeight;
    // console.log(document.documentElement.scrollTop);
    // // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    // if(pos == max )   {
    //   console.log("END");
    // }

    if( document.documentElement.scrollTop >= 400){
      this.containerVisible = true;
    }
    else{
      this.containerVisible = false;
    }
  }

}
