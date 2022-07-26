import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    CardComponent,
    ContactFormComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    CardComponent,
    ContactFormComponent,
  ]
  
})
export class SharedModule { }
