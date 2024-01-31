import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomepageComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonUtilsModule,

  ]
})
export class DashboardModule { }
