import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';
import { QuickAboutComponent } from './landing-page/quick-about/quick-about.component';
import { SharedModule } from '../shared/shared.module';
import { QuickContactComponent } from './landing-page/quick-contact/quick-contact.component';
import { AboutInfoComponent } from './about/about-info/about-info.component';
import { AboutQualificationsComponent } from './about/about-qualifications/about-qualifications.component';




@NgModule({
  declarations: [
    QuickAboutComponent,
    QuickContactComponent,
    AboutInfoComponent,
    AboutQualificationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule,
    MatIconModule
  ],
  exports: [
    QuickAboutComponent,
    QuickContactComponent,
    AboutInfoComponent,
    AboutQualificationsComponent
  ]
  
})
export class PageSpecificModule { }
