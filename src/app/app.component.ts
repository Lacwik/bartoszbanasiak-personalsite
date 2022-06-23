import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bartoszbanasiak-personalsite';

  constructor(private translate: TranslateService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

    translate.setDefaultLang('pl');
    translate.use('pl');

    this.matIconRegistry.addSvgIcon(
      `example`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconExample)
    );
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconFacebook)
    );
    this.matIconRegistry.addSvgIcon(
      `instagram`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconInstagram)
    );
    this.matIconRegistry.addSvgIcon(
      `strength`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconStrength)
    );
    this.matIconRegistry.addSvgIcon(
      `yoga`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconYoga)
    );
    this.matIconRegistry.addSvgIcon(
      `athlete`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconAthlete)
    );
    this.matIconRegistry.addSvgIcon(
      `trophy`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(environment.iconTrophy)
    );

    
  }
}
