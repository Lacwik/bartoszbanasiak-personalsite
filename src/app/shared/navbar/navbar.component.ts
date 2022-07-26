import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logoSource = '';
  pathLandingPage = '';
  pathAboutPage = '';
  pathOfferPage = '';
  pathContactPage = '';

  constructor(private router: Router,
              private pageScrollService: PageScrollService, 
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.logoSource = environment.logoPath;
    this.pathLandingPage = environment.pathLandingPage;
    this.pathAboutPage = environment.pathAboutPage;
    this.pathOfferPage = environment.pathOfferPage;
    this.pathContactPage = environment.pathContactPage;
  }

  navigateTo(path: string): void {
    this.router.navigateByUrl('/' + path);
    this.scrollToTop(0);
  }

  scrollToTop(duration?: number | undefined) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#top',
      duration: duration
    });
  }

  scrollToTopSmooth() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#top'
    });
  }


  

}
