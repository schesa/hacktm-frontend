import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { NGO } from '../shared/ngo.model';

@Injectable()
export class NgoService {
  rootUrl = "http://89.42.135.219:8090/";

  constructor(private http: HttpClient) { }


  ngoAuthentication(password: String, email: String){
    var data = email+":"+password;
    var reqHeader = new HttpHeaders({'authorization': 'Basic ' + btoa(data)});
   return this.http.post("/api/ngos/login","", {headers : reqHeader, withCredentials:true});
  }
  
  ngoRegistration(ngo:NGO){
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post("/api/ngos", ngo.getJSON() , {headers : reqHeader, withCredentials:true});
  }
}
