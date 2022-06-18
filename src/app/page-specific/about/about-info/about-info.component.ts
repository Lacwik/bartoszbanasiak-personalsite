import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrls: ['./about-info.component.scss']
})
export class AboutInfoComponent implements OnInit {

  imgPath = '';
  urlFb = '';
  urlInstagram = '';

  constructor() { }

  ngOnInit(): void {
    this.imgPath = environment.imgProfile;
    this.urlFb = environment.urlFacebook;
    this.urlInstagram = environment.urlInstagram;
  }

}
