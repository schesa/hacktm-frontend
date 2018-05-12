import {Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const appRoutes : Routes =[
    {
        path:'login', component: SignInComponent,
    },
    {
        path:'home', component: HomeComponent,
    },

    {
        path:'', redirectTo:'/login', pathMatch:'full'
    }
];