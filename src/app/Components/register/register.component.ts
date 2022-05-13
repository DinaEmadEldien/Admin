import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/Models/admin';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  NewAdmin:Admin={'userName':'','password':'','email':''}



  constructor(private fb: FormBuilder,private router:Router,private httpClient:HttpClient,private authService:AuthService) {

    this.userRegisterFormGroup = fb.group({
      // name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/(admin)|(user)/)]],
      userName: ['', [Validators.required, Validators.minLength(3),]],
      email: [''],
      // mobileNo: fb.array([fb.control('')]),
      // address: fb.group({
      //   street: [''],
      //   postalCode: [''],
      // }),
      password: [''],
      // confirmPassword: [''],
      // reachedBy: [''],
      // reachedByOther: [''],
    });
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.userRegisterFormGroup.controls['userName'];
  }

  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }

  register() {
    // Call API, send this.userRegisterFormGroup.value;

    console.log(this.userRegisterFormGroup.value);

    this.NewAdmin.userName=this.userRegisterFormGroup.value.userName;
    this.NewAdmin.email=this.userRegisterFormGroup.value.email;
    this.NewAdmin.password=this.userRegisterFormGroup.value.password;

    this.authService.Register(this.NewAdmin)
    .subscribe(user=>{
      this.router.navigate(['/Login']);
    });


  }

}
