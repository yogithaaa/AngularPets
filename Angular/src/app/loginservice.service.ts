import { Injectable } from '@angular/core';
import { LoopBackAuth, SDKToken } from '../loopback/shared/sdk';
import { Observable } from 'rxjs';
import { UsermasterApi, ExcelApi, PetdetailsApi,LivelocationApi } from '../loopback/shared/sdk'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private sessiontoken: SDKToken = new SDKToken(); // This is for creating token Object....
  private rememberMe: boolean = true;

  constructor(
    private UsermstApi: UsermasterApi,
    private ExcelApi: ExcelApi,
    private PetdetailsApi: PetdetailsApi,
    private liveLocation:LivelocationApi
  ) { }
  /**
     * @author: DHARANI SAI
     * The below function is used to save Register Details
     */

  register(data): Observable<any> {
    return this.UsermstApi.register(data);
  }
  /**
     * @author: DHARANI SAI
     * The below function is used to Login Details
     */
  login(userObj): Observable<any> {
    return this.UsermstApi.login(userObj);
  }
  /**
     * @author: DHARANI SAI
     * The below function is used to Logout
     */
  logout(logoutdata): Observable<any> {
    localStorage.clear();
    return this.UsermstApi.logout();
  }

  changePassword(oldpass,newpass) {
    return this.UsermstApi.changePassword(oldpass,newpass).toPromise()
  }

  /**
     * @author: DHARANI SAI
     * The below function is used to Save Excel Upload  Details
     */
  saveexcel(data): Observable<any> {
    return this.UsermstApi.excel(data);
  }
  /**
     * @author: DHARANI SAI
     * The below function is used to get excel Details
     */
  getexceldata(): Observable<any> {
    return this.ExcelApi.find()
  }

  savepetdetails(data): Observable<any> {
    return this.UsermstApi.petdetails(data);
  }

  getPetDetails(id): Observable<any> {
    return this.PetdetailsApi.find({ where: { loginid: id,status:'A' } });
  }

  //   updateByTable(id): Observable<any> {
  //   return this.UsermstApi.updateByTable(id);
  // }


  getprofiledata(data):Observable<any>{
    return this.UsermstApi.find({
      where: {
        id:data
      }
    })
  }

  trackMyPet(data):Observable<any>{
    return this.UsermstApi.alarm(data)
  }
  downloadTrackMyPet(data):Observable<any>{
    return this.UsermstApi.petTrackdetails(data)
  }
  resetPassword(data):Observable<any>{
    return this.UsermstApi.forgotPassword(data)
  }

  updatePassword(newPssObj):Observable<any>{
    return this.UsermstApi.updatePassword(newPssObj)
  }

  updateLiveLocation():Observable<any>{
    return this.liveLocation.find({
      where: {
        id:1
      }
    })
  }
}
