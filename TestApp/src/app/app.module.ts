import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AppService } from 'src/AppService';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from 'src/RequestInterceptorService';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from 'src/AuthGuardService';
import { AuthService } from 'src/AuthService';
import { RoleGuardService } from 'src/RoleGuardService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from 'src/app/app-routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
    MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DefaultComponent } from './default/default.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooComponent,
        LoginComponent,
        OrdersComponent,
        OrderComponent,
        AdminComponent,
        RegisterComponent,
        AppNavComponent,
        DefaultComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpModule,
        //  OAuthModule.forRoot(),
        AppRoutingModule,
        NgbModule.forRoot(),

        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
        AppService, AuthGuardService, AuthService, RoleGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
