import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ExceluploadComponent } from './excelupload/excelupload.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { ReactiveFormsModule } from '@angular/forms';
import { LoopBackConfig } from '../loopback/shared/sdk';
import { SDKBrowserModule } from '../loopback/shared/sdk';
import { ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule} from 'ngx-toastr';
  
import { XlsxToJsonService } from './xlsx-to-json-service';
import { PetdetailsComponent } from './petdetails/petdetails.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api'; 
import {InputTextModule} from 'primeng/inputtext';  
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PettrackingComponent } from './pettracking/pettracking.component';
import { ProfileComponent } from './profile/profile/profile.component';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ExceluploadComponent,
    PetdetailsComponent,
    PettrackingComponent,
    ProfileComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    InputTextModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    ReactiveFormsModule,
    SDKBrowserModule.forRoot(),
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjv8DFrg0CBjgAEGuqCvbs_sGRyLUSjNY'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [XlsxToJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    LoopBackConfig.setBaseURL('http://159.203.30.75:3001');
    LoopBackConfig.setApiVersion('api');
  }
}

//159.203.30.75 