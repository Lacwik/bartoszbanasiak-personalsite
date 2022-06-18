import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    CardComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    CardComponent,
  ]
  
})
export class SharedModule { }
