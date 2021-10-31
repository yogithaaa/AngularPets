import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';
import { InputTextModule } from 'primeng/inputtext';
import { ActivatedRoute } from '@angular/router';
import { SDKToken, UsermasterApi, User } from '../../loopback/shared/sdk';

@Component({
  selector: 'app-petdetails',
  templateUrl: './petdetails.component.html',
  styleUrls: ['./petdetails.component.css']
})
export class PetdetailsComponent implements OnInit {
  PetdetailsForm: FormGroup;
  disableButton: boolean = false;
  HideMsg: any = true;
  profiledataaaa: {};
  popoverTitle: string = 'Popover title';
  popoverMessage: string = 'Are you sure';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  update: boolean = false;
  data: any = {};
  selectedPetIdForUpdate:number;
  constructor(
    private LoginserviceService: LoginserviceService,
    private Router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    /**
* @author: DHARANI SAI
* The below FormGroup is used Registration Form
*/
    this.PetdetailsForm = new FormGroup({
      "petname": new FormControl(null, Validators.required),
      "breed": new FormControl(null, Validators.required),
      "dob": new FormControl(null, Validators.required),
      "weight": new FormControl(null, Validators.required),
      "height": new FormControl(null, Validators.required),
      "chipid": new FormControl(null, Validators.required),
    })

    let profiledata = localStorage.getItem('user');
    this.profiledataaaa = JSON.parse(profiledata);

    this.getPetDetails();
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
    if (incrementCount === countFields) {
      data.status = "A";
      this.disableButton = true;
      let data1: any = JSON.parse(localStorage.getItem('user'));
      data['loginid'] = data1.id;
      // data['alarmstatus'] = 0
      this.LoginserviceService.savepetdetails(data).subscribe(message => {
        this.PetdetailsForm.reset();
        setTimeout(() => {
          this.getPetDetails();
          this.toastr.success('Success!', 'Pet Details Saved !')
        });
        this.HideMsg = false;
      })
      this.disableButton = false;
    }
  }

  /**
   * @author: DHARANI SAI
   * The below function is used to Logout
   */

  signOut() {
    let logoutdata = JSON.parse(localStorage.getItem('user'));
    logoutdata['loginid'] = logoutdata['id'];
    this.LoginserviceService.logout(logoutdata).subscribe((token: SDKToken) => {
      this.toastr.success('Success ....', 'LogOut !!', {
        timeOut: 3000,
        // positionClass: 'toast-top-center',
        progressBar: true,
        progressAnimation: 'increasing'
      });
    })
    this.router.navigate(['']);

  }


  reset() {
    this.PetdetailsForm.reset();
  }

  getPetDetails() {
    this.LoginserviceService.getPetDetails(this.profiledataaaa['id']).subscribe(res => {
      console.log(JSON.stringify(res));
      this.data = res;
    })
  }

  deletePet(id) {
      let updatedata = {
        table: 'petdetails',
        where: {
          id: id
        },
        updateCont: {
          status: 'X'
        }
      }
      // this.LoginserviceService.updateByTable(updatedata).subscribe(res => {
      //   this.toastr.success('Success ....', 'Deleted!', {
      //     timeOut: 2000,
      //   });
      //   this.getPetDetails();
      // })
  }
  updatePetDtls() {
    let form=this.PetdetailsForm
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
    if (incrementCount === countFields) {
    let updatedata = {
      table: 'petdetails',
      where: {
        id: this.selectedPetIdForUpdate
      },
      updateCont: this.PetdetailsForm.value
    }
    // this.LoginserviceService.updateByTable(updatedata).subscribe(res => {
    //   this.toastr.success('Success ....', 'Details updated!', {
    //     timeOut: 2000,
    //   });
    //   this.getPetDetails();
    // })
    }
  }

  editPet(i) {
    this.selectedPetIdForUpdate=this.data[i].id
    this.update = true
    this.PetdetailsForm.controls['petname'].setValue(this.data[i].petname);
    this.PetdetailsForm.controls['breed'].setValue(this.data[i].breed);
    this.PetdetailsForm.controls['dob'].setValue(new Date(this.data[i].dob));
    this.PetdetailsForm.controls['weight'].setValue(this.data[i].weight);
    this.PetdetailsForm.controls['height'].setValue(this.data[i].height);
    this.PetdetailsForm.controls['chipid'].setValue(this.data[i].chipid);
  }

  goToTracking(id) {
    this.router.navigate(['/pettracking'], { queryParams: { ID: id } });
  }
}
