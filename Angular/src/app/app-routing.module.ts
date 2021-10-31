import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExceluploadComponent } from '../app/excelupload/excelupload.component';
import { LoginComponent } from '../app/login/login.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { PetdetailsComponent } from '../app/petdetails/petdetails.component'
import { PettrackingComponent } from './pettracking/pettracking.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'petlover', component: ExceluploadComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'petdetails', component: PetdetailsComponent },
  { path: 'pettracking', component: PettrackingComponent },
  { path: 'profiledata', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
