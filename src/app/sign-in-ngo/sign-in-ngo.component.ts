import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoService } from '../shared/ngo.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in-ngo',
  templateUrl: './sign-in-ngo.component.html',
  styleUrls: ['./sign-in-ngo.component.css']
})
export class SignInNgoComponent implements OnInit {

  constructor(private ngoService: NgoService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(password: String, email: String ){
    this.ngoService.ngoAuthentication(password, email).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['home']);
      }, (err: HttpErrorResponse)=>{console.log(err);}
    );
}

}
