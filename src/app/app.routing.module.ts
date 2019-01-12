import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './main/components/login/login.component';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';
import { AuthGuard } from './common/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AvatarComponent } from './main/components/avatar/avatar.component';
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'setAvatar', component: AvatarComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'login' }
    ]),HttpClientModule,HttpModule
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }


