import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUtilsRoutingModule } from './common-utils-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component'





@NgModule({
  declarations: [
    TopBarComponent,
    SearchBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CommonUtilsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
exports:[
  TopBarComponent
]
})
export class CommonUtilsModule { }
