import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/header/header.component';
import { MiddleComponent } from './main/components/middle/middle.component';


//primeng
import {RadioButtonModule} from 'primeng/radiobutton';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule,RadioButtonModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
