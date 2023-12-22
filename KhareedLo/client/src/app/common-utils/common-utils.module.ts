import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    SearchBarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
exports:[
  SearchBarComponent,
  ProfileComponent
]
})
export class CommonUtilsModule { }
