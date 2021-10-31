import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegForm: FormGroup;
  disableButton: boolean = false;
  HideMsg: any = true;
  ischeckPassword: any = false;
  passwordPatternError = false;

  constructor(
    private LoginserviceService: LoginserviceService,
    private Router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    /**
   * @author: DHARANI SAI
   * The below FormGroup is used Registration Form
   */
    this.RegForm = new FormGroup({

      "email": new FormControl(null, [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]),
      "username": new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      "name": new FormControl(null, [Validators.required, Validators.maxLength(30), Validators.minLength(3)]),
      "mobilenumber": new FormControl(null, [Validators.required, Validators.pattern('[7-9]{1}[0-9]{9}')]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      "confirmpassword": new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)])
    })
  }
  /**
     * @author: DHARANI SAI
     * The below function is used to Registration Details
     */
  SaveRegistrationdata(data, form) {
    let countFields = 6;
    let incrementCount = 0;
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl && control.hasError('required')) {
        control.markAsTouched({ onlySelf: true });

      } else {
        ++incrementCount
      }
    })
    if (this.RegForm.valid) {
      if (incrementCount === countFields && this.ischeckPassword == false) {
        data.status = "A";
        data.useMe = this.RegForm.controls['password'].value;
        const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        console.log(pattern.test(this.RegForm.controls['password'].value))
        if (pattern.test(this.RegForm.controls['password'].value)) {
          data.useMe = this.RegForm.controls['password'].value;
          this.passwordPatternError = false;
          this.disableButton = true;
          this.LoginserviceService.register(data).subscribe(message => {
            if (message.registerdata && message.registerdata.statusCode == 422) {
              this.disableButton = false;
              setTimeout(() => {
                this.toastr.error('', 'Email or User already exists');
              });
              this.HideMsg = false;
            }
            else {
              this.RegForm.reset();
              this.disableButton = false;
              this.Router.navigate([''])
              setTimeout(() => {
                this.toastr.success('Success!', 'Registration !')
              });
              this.HideMsg = false;
            }

          })

        } else {
          this.passwordPatternError = true;
        }
      }
    }
  }
  checkPassword(value) {
    if (value !== this.RegForm.controls['password'].value)
      this.ischeckPassword = true;
    else
      this.ischeckPassword = false;
  }
}
