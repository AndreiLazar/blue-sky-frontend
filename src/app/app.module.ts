import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementModule } from './user-management/user-management.module'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Shared4Module } from './shared4/shared4.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserManagementModule,
    NgbModule,
    DashboardModule,
    Shared4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
