import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router:Router,private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
  }

  isUserAuthanticated(){
    const token:string|null=localStorage.getItem("jwt");
    if(token&& !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    else{
      return false;
    }
  }

  logout()
  {
    localStorage.removeItem("jwt");
    this.router.navigate(["/Login"]);
    alert("successfully Logout...");
  }

}
