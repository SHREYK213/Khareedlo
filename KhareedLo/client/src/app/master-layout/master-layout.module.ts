import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './master-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { MasterLayoutRoutingModule } from './master-layout-routing.module';




@NgModule({
  declarations: [
    MasterLayoutComponent,
    TopBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    CommonUtilsModule,
    MasterLayoutRoutingModule
  ]
})
export class MasterLayoutModule { }
