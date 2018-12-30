import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './main/components/login/login.component';
import { DashboardComponent } from './main/components/dashboard/dashboard.component';


@NgModule({
  declarations: [



  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },

      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule { }


