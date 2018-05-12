import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { OngComponent } from './ong/ong.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UserComponent,
    OngComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule      
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
