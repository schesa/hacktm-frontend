import {Routes} from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignInNgoComponent } from './sign-in-ngo/sign-in-ngo.component';
import { SignInVolunteerComponent } from './sign-in-volunteer/sign-in-volunteer.component';

export const appRoutes : Routes =[
    {
        path:'login-volunteer', component: SignInVolunteerComponent,
    },
    {
        path:'login-ngo', component: SignInNgoComponent,
    },
    {
        path:'home', component: HomeComponent,
    },
    {
        path:'', redirectTo:'/login-volunteer', pathMatch:'full'
    }
];