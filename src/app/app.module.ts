import { PathService } from './Services/path.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout/frontend-layout.component';
import { LoginRegisterLayoutComponent } from './layouts/login-register-layout/login-register-layout/login-register-layout.component';
import { FooterFrontendComponent } from './shared/frontend/footer-frontend/footer-frontend/footer-frontend.component';
import { HeaderFrontendComponent } from './shared/frontend/header-frontend/header-frontend/header-frontend.component';
import { AsideFrontendComponent } from './shared/frontend/aside-frontend/aside-frontend/aside-frontend.component';
import { LoginRegisterComponent } from './pages/login-register/login-register/login-register.component';
import { MainComponent } from './pages/frontend/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DetailsLayoutComponent } from './layouts/details-layout/details-layout.component';
import { DetailsComponent } from './pages/frontend/details/details.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { ProfileComponent } from './pages/frontend/profile/profile.component';
import { RegisterComponent } from './pages/backend/register/register.component';
import { RegisterLayoutComponent } from './layouts/backend-layout/register-layout/register-layout.component';
import { CourseLayoutComponent } from './layouts/backend-layout/course-layout/course-layout.component';





@NgModule({
  declarations: [
    AppComponent,
    FrontendLayoutComponent,
    LoginRegisterLayoutComponent,
    FooterFrontendComponent,
    HeaderFrontendComponent,
    AsideFrontendComponent,
    LoginRegisterComponent,
    MainComponent,
    MainLayoutComponent,
    DetailsLayoutComponent,
    DetailsComponent,
    ProfileLayoutComponent,
    ProfileComponent,
    RegisterComponent,
    CourseLayoutComponent,
    RegisterLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
