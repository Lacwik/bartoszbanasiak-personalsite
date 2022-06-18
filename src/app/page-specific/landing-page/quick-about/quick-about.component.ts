import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quick-about',
  templateUrl: './quick-about.component.html',
  styleUrls: ['./quick-about.component.scss']
})
export class QuickAboutComponent implements OnInit {

  imgPath = '';

  constructor() { }

  ngOnInit(): void {
    this.imgPath = environment.imgProfile;
  }

}
