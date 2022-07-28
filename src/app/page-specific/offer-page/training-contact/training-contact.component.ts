import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-training-contact',
  templateUrl: './training-contact.component.html',
  styleUrls: ['./training-contact.component.scss']
})
export class TrainingContactComponent implements OnInit {

  pathContactPage = '';

  constructor(private router: Router,
              private pageScrollService: PageScrollService, 
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.pathContactPage = environment.pathContactPage;
  }

  navigateToContactPage(): void {
    this.router.navigateByUrl('/' + this.pathContactPage);
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#top',
      duration: 0
    });
  }

}
