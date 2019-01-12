import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/login/header/header.component';
import { MiddleComponent } from './main/components/login/middle/middle.component';
import { DashboardHeaderComponent } from './main/components/dashboard/dashboardHeader/dashboardHeader.component';
import { DashboardLeftComponent } from './main/components/dashboard/dashboardLeft/dashboardLeft.component';
import { DashboardPostsComponent } from './main/components/dashboard/dashboardPosts/dashboardPosts.component';
import { DashboardRightComponent } from './main/components/dashboard/dashboardRight/dashboardRight.component';
import { PostBoxComponent } from './main/components/dashboard/dashboardPosts/post-box/post-box.component';
import { AvatarComponent } from './main/components/avatar/avatar.component';
import { LoginComponent } from './main/components/login/login.component';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';

//primeng
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { GetValidationMessages } from './main/components/login/middle/validationMessages';
import { HttpUrls } from './common/common.constants';
import { LocalDataService } from './common/localStorage.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthGuard } from './common/auth-guard.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { SessionTimeout } from './common/sessionTimeout';
import { AvatarService } from './main/components/avatar/avatar.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MiddleComponent,
    AvatarComponent,
    LoginComponent,
    DashboardComponent,
    DashboardRightComponent,
    DashboardLeftComponent,
    DashboardPostsComponent,
    DashboardHeaderComponent,
    PostBoxComponent
  ],
  imports: [
    NgIdleKeepaliveModule.forRoot(), AppRoutingModule, HttpClientModule, BrowserModule, RadioButtonModule,InputTextareaModule, FormsModule, InputTextModule, CalendarModule, BrowserAnimationsModule, ReactiveFormsModule
  ],
  providers: [GetValidationMessages, HttpUrls, LocalDataService, AuthGuard, SessionTimeout,AvatarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
