import { RegisterComponent } from "src/app/register/register.component";
import { AdminComponent } from "src/app/admin/admin.component";
import { RoleGuardService } from "src/RoleGuardService";
import { AuthGuardService } from "src/AuthGuardService";
import { LoginComponent } from "src/app/login/login.component";
import { HomeComponent } from "src/app/home/home.component";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { DefaultComponent } from "src/app/default/default.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'index/home' },
    { path: 'login', component: LoginComponent },
    {
        path: 'admin', component: AdminComponent, canActivate: [RoleGuardService],
        data: {
            expectedRole: 'Admin'
        }
    },
    { path: 'register', component: RegisterComponent },
    {
        path: 'index', component: DefaultComponent, canActivate: [AuthGuardService],
        children: [{
            path: 'home',
            component: HomeComponent
        }]
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }