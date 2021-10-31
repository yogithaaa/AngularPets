import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginserviceService} from '../../loginservice.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import {InputTextModule} from 'primeng/inputtext';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ProfileForm: FormGroup;
  disableButton:boolean=false;
  HideMsg:any=true;
  profiledata:any;
  profileiddata:any;

  constructor(
    private LoginserviceService:LoginserviceService,
    private Router:Router,
    private toastr: ToastrService,
    private ActivatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {

    this.ProfileForm=new FormGroup({
      "email":new FormControl(null, Validators.required),
      "username": new FormControl(null, Validators.required),
      "name": new FormControl(null, Validators.required),
      "mobilenumber": new FormControl(null, Validators.required),
      "oldpass": new FormControl(null),
      "newpass": new FormControl(null),
    })

    this.ActivatedRoute.queryParams.subscribe(params => {
      this.profileiddata = params['id'];
      this.getprofiledata();
    });
    if(this.profileiddata != null && this.profileiddata != undefined && this.profileiddata != ""){
      this.getprofiledata();
    }else{

    }
    
  }

  getprofiledata(){
    this.LoginserviceService.getprofiledata(this.profileiddata).subscribe(GetAdvtRes=>{
        this.profiledata=GetAdvtRes[0].id;
        this.ProfileForm.controls['email'].setValue(GetAdvtRes[0].email);
        this.ProfileForm.controls['username'].setValue(GetAdvtRes[0].username);
        this.ProfileForm.controls['name'].setValue(GetAdvtRes[0].name);
        this.ProfileForm.controls['mobilenumber'].setValue(GetAdvtRes[0].mobilenumber);
     })
 }
 SaveRegistrationdata() {
   let form=this.ProfileForm;
   let data=this.ProfileForm.value;
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
    if (this.ProfileForm.valid) {
        data.status = "A";
        data.id=this.profileiddata;
        this.disableButton = true;
        this.LoginserviceService.register(data).subscribe(message => {
          setTimeout(() => {
            this.toastr.success('Success!', 'Update !')
          });
          this.HideMsg = false;
        })
        this.disableButton = false;
    }
    else{
      alert("hai");
    }
  }
 
}
