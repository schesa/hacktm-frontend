import { Component, OnInit } from '@angular/core';
import { NGO } from '../shared/ngo.model';
import { Router } from '@angular/router';
import { NgoService } from '../shared/ngo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngo:NGO;

  constructor(private ngoService: NgoService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(password:String, email:String ,purpose:String, website:String, location:String ){
    this.ngo = new NGO(email, password, name, purpose, website, location);
    console.log(this.ngo.getJSON());
      this.ngoService.ngoRegistration(this.ngo).subscribe((data:any)=>{
        console.log(data);
        this.router.navigate(['login-ngo']);
        }, (err: HttpErrorResponse)=>{console.log(err);});
  }
}
