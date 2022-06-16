import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OfferPageComponent } from './offer-page/offer-page.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'offer', component: OfferPageComponent },
    { path: 'contact', component: ContactPageComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
