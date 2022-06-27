import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    AboutQualificationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    QuickAboutComponent,
    QuickContactComponent,
    AboutInfoComponent,
    AboutQualificationsComponent
  ]
  
})
export class PageSpecificModule { }
