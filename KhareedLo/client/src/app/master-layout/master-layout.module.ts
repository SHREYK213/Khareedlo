import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './master-layout.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MasterLayoutRoutingModule } from './master-layout-routing.module';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { CategoryListComponent } from './components/category-list/category-list.component';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    MasterLayoutComponent,
    TopBarComponent,
    SidebarComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MasterLayoutRoutingModule,
    CommonUtilsModule,
    MatSelectModule,
    MatDividerModule,
    MatRippleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule
  ]
})
export class MasterLayoutModule { }
