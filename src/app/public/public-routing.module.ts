import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    { path: environment.pathLandingPage, component: LandingPageComponent },
    { path: environment.pathAboutPage, component: AboutPageComponent },
    { path: environment.pathOfferPage, component: OfferPageComponent },
    { path: environment.pathContactPage, component: ContactPageComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
