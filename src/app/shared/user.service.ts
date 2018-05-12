import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  rootUrl = "http://89.42.135.219:8090/";
  constructor(private http: HttpClient) { }

  userAuthentication(password: String, email: String){
    var data = email+":"+password;
    // var reqHeader = new HttpHeaders({'authorization': 'Basic ' + btoa(data)});
    // console.log(reqHeader);
    
    var reqHeader = new HttpHeaders({'authorization': 'Basic dGVzdEB0ZXN0LmNvbTp0ZXN0'});
    return this.http.get("/volunteers/login", {headers : reqHeader});
  }
}
