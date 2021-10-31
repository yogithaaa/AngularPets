import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service'
import { SDKToken, UsermasterApi, User } from '../../loopback/shared/sdk';
import { ActivatedRoute } from '@angular/router';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import { XlsxToJsonService } from '../xlsx-to-json-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-excelupload',
  templateUrl: './excelupload.component.html',
  styleUrls: ['./excelupload.component.css']
})
export class ExceluploadComponent implements OnInit {
  ExcelForm: FormGroup;
  ProfileForm: FormGroup;
  profiledataaaa: any;
  result: any;
  exceldata: any;
  exceldatares: string[];
  exceldatares1: boolean = false;
  profileid: any
  constructor(
    private router: Router,
    private LoginserviceService: LoginserviceService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private xlsxToJsonService: XlsxToJsonService,
  ) { }

  handleFile(event) {
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      this.result = JSON.stringify(data['sheets'].Sheet1);

    })

  }

  ngOnInit() {
    let profiledata = localStorage.getItem('user');
    this.profiledataaaa = JSON.parse(profiledata);

    this.ProfileForm = new FormGroup({
      "oldpass": new FormControl(null),
      "newpass": new FormControl(null),
    })
  }

  /**
   * @author: DHARANI SAI
   * The below function is used to Logout
   */

  signOut() {
    let logoutdata = (localStorage.getItem('user'));
    this.LoginserviceService.logout(logoutdata['id']).subscribe((token: SDKToken) => {
      this.toastr.success('Success ....', 'LogOut !!', {
        timeOut: 3000,
        positionClass: 'toast-top-center',
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      this.router.navigate(['']);
    })


  }


  navigateTo() {
    this.router.navigate(['petdetails']);
  }

  profiledata() {
    this.profileid = JSON.parse(localStorage.getItem('user'));

    this.router.navigate(['profiledata'], { queryParams: { id: this.profileid.id } })
  }
  changepass() {
    this.LoginserviceService.changePassword(this.ProfileForm.value.oldpass, this.ProfileForm.value.newpass).then
    (response => {
      console.log(response)
      if(response === null){
        this.toastr.success('Success ....', 'Password Changed !', {
          timeOut: 2000
        });
        var newPssObj ={
          id:this.profiledataaaa.id,
          useMe:this.ProfileForm.value.newpass
        }
        this.LoginserviceService.updatePassword(newPssObj).subscribe(res1=>{
          console.log('hiho',res1)
          this.ProfileForm.reset()
        })
       }else{
         console.log(response)
       }
    }).catch(err=>{
      console.log(err)
      this.toastr.error('Invalid Current Password', 'Enter Valid Data', {
        timeOut: 2000
      });
    })
  }
}
