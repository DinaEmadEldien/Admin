import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../Models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newAdmin:Admin={'userName':'','password':'','email':''};

  private httpOptions;


  constructor(private httpClient:HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        "Content-Type":"application/json"   //Headers data
        ,"Authorization":"token"
      }

      )
    }
  }

  Register(newAdmin:Admin): Observable<Admin>
  {
    return this.httpClient.post<Admin>(`${environment.ApiBaseUrl}/api/Account/Register`, JSON.stringify(newAdmin),this.httpOptions);
  }
}
