import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/login/header/header.component';
import { MiddleComponent } from './main/components/login/middle/middle.component';


//primeng
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { GetValidationMessages } from './main/components/login/middle/validationMessages';
import { HttpUrls } from './common/common.constants';
import { LocalDataService } from './common/localStorage.service';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './main/components/login/login.component';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MiddleComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,HttpClientModule, BrowserModule, RadioButtonModule, FormsModule, InputTextModule, CalendarModule, BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [GetValidationMessages, HttpUrls, LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
