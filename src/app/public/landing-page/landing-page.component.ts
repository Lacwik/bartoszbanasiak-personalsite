import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  cardsIconsColor = 'rgba(25,140,229,0.89)';

  constructor() { }

  ngOnInit(): void {
  }

}
