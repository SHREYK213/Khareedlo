import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './master-layout/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupModule,
    BrowserAnimationsModule,
    HttpClientModule  ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
