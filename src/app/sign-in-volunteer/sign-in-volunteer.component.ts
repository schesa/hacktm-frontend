import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in-volunteer',
  templateUrl: './sign-in-volunteer.component.html',
  styleUrls: ['./sign-in-volunteer.component.css']
})
export class SignInVolunteerComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(password: String, email: String ){
      this.userService.userAuthentication(password, email).subscribe((data:any)=>{
          console.log(data);
          this.router.navigate(['home']);
        }, (err: HttpErrorResponse)=>{console.log(err);}
      );
  }
}
