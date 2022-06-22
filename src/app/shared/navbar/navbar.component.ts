import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logoSource = environment.logoPath;
    this.pathLandingPage = environment.pathLandingPage;
    this.pathAboutPage = environment.pathAboutPage;
    this.pathOfferPage = environment.pathOfferPage;
    this.pathContactPage = environment.pathContactPage;
  }

  navigateTo(path: string): void {
    this.router.navigateByUrl('/' + path);
  }

}
