import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/example.svg")
    );
  }
}
