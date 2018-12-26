import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/header/header.component';
import { MiddleComponent } from './main/components/middle/middle.component';


//primeng
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { GetValidationMessages } from './main/components/middle/validationMessages';
import { HttpUrls } from './common/common.constants';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MiddleComponent
  ],
  imports: [
    HttpClientModule,BrowserModule,RadioButtonModule ,FormsModule,InputTextModule,CalendarModule,BrowserAnimationsModule,ReactiveFormsModule
  ],
  providers: [GetValidationMessages,HttpUrls],
  bootstrap: [AppComponent]
})
export class AppModule { }
