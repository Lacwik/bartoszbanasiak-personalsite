import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,

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
  ]
  
})
export class SharedModule { }
