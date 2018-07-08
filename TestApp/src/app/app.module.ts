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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooComponent,
        LoginComponent,
        OrdersComponent,
        OrderComponent,
        AdminComponent,
        RegisterComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        HttpModule,
        OAuthModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, canActivate: [AuthGuardService]  },
            { path: 'login', component: LoginComponent },
            {
                path: 'admin', component: AdminComponent, canActivate: [RoleGuardService],
                data: {
                    expectedRole: 'Admin'
                }
            },
            { path: 'register', component: RegisterComponent }]),
        NgbModule.forRoot()
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
        AppService, AuthGuardService, AuthService, RoleGuardService],
    bootstrap: [AppComponent]
})
export class AppModule { }
