import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  pathContactPage = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pathContactPage = environment.pathContactPage;
  }

  navigateTo(path: string): void {
    this.router.navigateByUrl('/' + path);
  }

}
