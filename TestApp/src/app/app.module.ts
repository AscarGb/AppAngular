import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from '../home/home.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FooComponent } from '../foo/foo.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { AppService } from 'src/AppService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooComponent,
    LoginComponent     
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent }])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
