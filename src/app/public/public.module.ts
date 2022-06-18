import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';
import { PageSpecificModule } from '../page-specific/page-specific.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
      LandingPageComponent,
      AboutPageComponent,
      OfferPageComponent,
      ContactPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageSpecificModule,
    TranslateModule
  ]
})
export class PublicModule { }
