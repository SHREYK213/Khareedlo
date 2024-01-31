import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    SearchBarComponent,
    ProfileComponent,
    SignupFormComponent  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    
  ],
  exports: [
    SearchBarComponent,
    ProfileComponent,
    SignupFormComponent
  ]
})
export class CommonUtilsModule { }
