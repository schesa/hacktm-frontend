import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  rootUrl = "http://89.42.135.219:8090/";
  constructor(private http: HttpClient) { }

  getString(){
    var reqHeader = new HttpHeaders({'Authorization': 'Basic dGVzdEB0ZXN0LmNvbTp0ZXN0'});
    return this.http.get(this.rootUrl, {headers:reqHeader});
  }

  userAuthentication(password: String, email: String){
    var data = email+":"+password;
    var reqHeader = new HttpHeaders({'authorization': 'Basic ' + btoa(data)});
    return this.http.post("/api/volunteers/login","", {headers : reqHeader, withCredentials:true});
  }
}
