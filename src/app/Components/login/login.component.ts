import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin:boolean=false;
  credentials: any = {UserNAme:'', PAssword:''};

  constructor(private router:Router,private httpClient:HttpClient) { }

  login(form:NgForm){
    const credentials={
      'UserNAme':form.value.UserNAme,
      'PAssword':form.value.PAssword
    }

    this.httpClient.post("http://localhost:9964/api/Account/Login", this.credentials).subscribe(response=>
    {
      const token=(<any>response).token;
      localStorage.setItem("jwt",token);
      this.invalidLogin=false;
      this.router.navigate(['/Products']);
    },err=>{
      this.invalidLogin=true;
    })
  }

  ngOnInit(): void {
  }

}
