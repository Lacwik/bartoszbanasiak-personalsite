import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-qualifications',
  templateUrl: './about-qualifications.component.html',
  styleUrls: ['./about-qualifications.component.scss']
})
export class AboutQualificationsComponent implements OnInit {

  repLogoSource = ""
  repProfileUrl = ""

  constructor() { }

  ngOnInit(): void {
    this.repLogoSource = environment.repLogoPath;
    this.repProfileUrl = environment.urlRepProfile;
  }

}
