import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { TranslateModule } from '@ngx-translate/core';


import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageScrollerComponent } from './page-scroller/page-scroller.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    CardComponent,
    ContactFormComponent,
    PageScrollerComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    NgxPageScrollCoreModule,
    MatInputModule
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    CardComponent,
    ContactFormComponent,
    PageScrollerComponent
  ]
  
})
export class SharedModule { }
