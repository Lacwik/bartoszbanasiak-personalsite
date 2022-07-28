import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quick-contact',
  templateUrl: './quick-contact.component.html',
  styleUrls: ['./quick-contact.component.scss']
})
export class QuickContactComponent implements OnInit {

  pathContactPage = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pathContactPage = environment.pathContactPage;
  }

  navigateToContactPage(): void {
    this.router.navigateByUrl('/' + this.pathContactPage);
  }

}
