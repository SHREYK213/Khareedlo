import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatIconModule } from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ],
exports:[
  SearchBarComponent
]
})
export class CommonUtilsModule { }
