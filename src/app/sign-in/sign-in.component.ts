import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  getString(){
    this.userService.getString().subscribe((data:any)=>{
        console.log(data);
    }, (err: HttpErrorResponse)=>{console.log(err);
    });
  }

  onSubmit(password: String, email: String ){
    // this.getString();
      this.userService.userAuthentication(password, email).subscribe((data:any)=>{
          console.log(data);
          this.router.navigate(['home']);
      }, (err: HttpErrorResponse)=>{console.log(err);
      });
  }
}
