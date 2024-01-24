import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    SearchBarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
exports:[
  SearchBarComponent,
  ProfileComponent
]
})
export class CommonUtilsModule { }
