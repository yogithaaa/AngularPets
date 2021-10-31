import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SDKToken, UsermasterApi } from '../../loopback/shared/sdk';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgotPassoword  = false;
  forgotPasswordForm:FormGroup;
  emailValid = false;
  phnNumberValild= false;
  disableForgot = false
  constructor(
    private usermst: UsermasterApi,
    private LoginserviceService: LoginserviceService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    /**
   * @author: DHARANI SAI
   * The below FormGroup is used for Login Form
   */
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })
    this.forgotPasswordForm = new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'phn':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    })
  }
  /**
     * @author: DHARANI SAI
     * The below function is used to Login
     */
  login(form) {
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;

    let loginObj = { 'email': username, 'password': password }
    this.LoginserviceService.login(loginObj).subscribe((token: SDKToken) => {
    console.log("token"+JSON.stringify(token))

      this.toastr.success('loading ....', 'Login Successfull', {
        timeOut: 3000,
        // positionClass: 'toast-top-center',
        progressBar: true,
        progressAnimation: 'increasing'
      });


      console.log(token)
      localStorage.setItem('user', JSON.stringify(token.user));
      localStorage.setItem('username', JSON.stringify(token.id));

      const local = localStorage.getItem('user');
      console.log(local)

      setTimeout(() => {
        this.router.navigate(['petlover'])
      }, 3000)

    }, (err) => {
      console.log(err)
      if (err.statusCode === 401) {
        this.toastr.error('Invalid Credentials', 'Login Failed', {
          timeOut: 8000,
          positionClass: 'toast-top-center'
        });
      }
    })
  }

  /**
   * The below function is used for Form Validation
   */
  valSignInForm(loginForm: FormGroup) {
    const errorCount = 2;
    let triggerSignIn = 0;
    Object.keys(loginForm.controls).forEach(field => {
      const control = loginForm.get(field);
      if (control instanceof FormControl && control.hasError('required')) {
        control.markAsTouched({ onlySelf: true });
      } else {
        ++triggerSignIn;
      }
    })
    if (triggerSignIn === errorCount) {
      // this.router.navigate(['dashboard']);
      this.login(loginForm)
    }
  }
  toggleForm(){
    this.forgotPassoword = !this.forgotPassoword;
  }
  forgotPasswordEmail(){
    if(this.forgotPasswordForm.controls['email'].hasError('required') ||
       this.forgotPasswordForm.controls['email'].invalid
    ){
      this.forgotPasswordForm.controls['email'].markAsTouched({onlySelf:true})
      this.emailValid = false
      }else{
        this.emailValid = true
      }
      if( this.forgotPasswordForm.controls['phn'].hasError('required') || this.forgotPasswordForm.controls['phn'].invalid){
      this.forgotPasswordForm.controls['phn'].markAsTouched({onlySelf:true})
        console.log('ji')
      this.phnNumberValild = false
    }else{
      console.log('hi')
      this.phnNumberValild = true
    }
    if(this.emailValid && this.phnNumberValild){
      this.disableForgot = true
      var obj = {
        email:this.forgotPasswordForm.controls['email'].value,
        phonenumber:this.forgotPasswordForm.controls['phn'].value
      }
     this.LoginserviceService.resetPassword(obj).subscribe(res=>{
       console.log('___',res)
       if (res == 404 || res == 403) {
         var msg = res ==404?'Email or Phone Number Do not match':'Email Id Not Found'
        this.toastr.error(msg, 'Enter Valid Data', {
          timeOut: 8000,
          positionClass: 'toast-top-center'
        });
        this.disableForgot = false
      }else{
        this.forgotPasswordForm.reset()
        this.disableForgot = true
        this.toastr.success('Please Check Your Registered Email Address', 'Email Sent!', {
          timeOut: 8000,
          positionClass: 'toast-top-center'
        });
        setTimeout(()=>{
         this.forgotPassoword = false
        },8000)
      }
     })
    }
  }
}
