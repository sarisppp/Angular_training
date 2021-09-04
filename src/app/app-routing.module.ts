import { ProfileComponent } from './pages/frontend/profile/profile.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { DetailsLayoutComponent } from './layouts/details-layout/details-layout.component';
import { DetailsComponent } from './pages/frontend/details/details.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout/frontend-layout.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout/login-register-layout.component';
import { LoginRegisterComponent } from './pages/login-register/login-register/login-register.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainComponent } from './pages/frontend/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: FrontendLayoutComponent,
    children: [
      {
        path: "",
        component: FrontendLayoutComponent,
        pathMatch: 'full' 
      }
    ]
  },
  {
    path: 'login',
    component: LoginRegisterLayoutComponent,
    children: [
      {
        path: "",
        component: LoginRegisterComponent
      }]
  },
  {
    path:'main',
    component:MainLayoutComponent,
    children: [
      {
        path: "",
        component: MainComponent,
        pathMatch: 'full' 
      }
    ]
  },
  {
    path:'details/:id',
    component:DetailsLayoutComponent,
    children:[
      {
        path:"",
        component:DetailsComponent,
        pathMatch:'full'
      }
    ]
  },
  {
    path:'profile',
    component:ProfileLayoutComponent,
    children:[
      {
        path:"",
        component:ProfileComponent,
        pathMatch:'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
