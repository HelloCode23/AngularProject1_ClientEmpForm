import { Routes } from '@angular/router';
import { MasterComponent } from './Components/master/master.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { ClientComponent } from './Components/client/client.component';
import { ClientProjectComponent } from './Components/client-project/client-project.component';
import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import path from 'path';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
            path:'master',
        component: MasterComponent},
        {
            path:'employee',
            component: EmployeeComponent
        },
        {
            path:'client',
            component: ClientComponent
            
        },
        {
            path:'client-project',
            component: ClientProjectComponent
        }
     ]
       
    }]
