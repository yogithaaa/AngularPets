import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { Angular5Csv } from 'angular5-csv/dist/Angular5-csv';
@Component({
  selector: 'app-pettracking',
  templateUrl: './pettracking.component.html',
  styleUrls: ['./pettracking.component.css']
})
export class PettrackingComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  userid:any;
  petid:any;
  circleRadius:number = 20000;
  fullAddress:any;
  disableBtn =false
  voiceModule = false
  liveLat=44.2666028
  liveLng = -78.3766741
  liveLocationAddr = '599 Brealey Dr, Peterborough, ON K9J 7B1,7J8G+J6 Peterborough, Ontario'
  constructor(private ac: ActivatedRoute,private loginService: LoginserviceService) { }

  ngOnInit() {

    this.ac.queryParams.subscribe(params => {
        let profiledata = localStorage.getItem('user');
        var temp = JSON.parse(profiledata);
        this.userid = temp.id
        this.petid = params['ID']
    })

    setInterval(()=>{
      console.log('hi')
        this.loginService.updateLiveLocation().subscribe(res=>{
          console.log(JSON.stringify(res))
          console.log((res[0].livelng))
          console.log((res[0].livelng))
          this.liveLat = Number(res[0].livelat)
          this.liveLng = Number(res[0].livelng)

          let geocoder = new google.maps.Geocoder;
          let latlng = {lat: this.liveLat, lng: this.liveLng};
          let that = this;
          geocoder.geocode({'location':latlng},function(results){
            console.log(results)
            that.liveLocationAddr = results[0].formatted_address
          })
        })
    },10000)
    
  }

  trackMypet(){
    this.voiceModule = true;
    this.disableBtn = true
    var obj = {
      currentpetid:this.petid,
      usermstid:this.userid,
      status:'A'
    }
      this.loginService.trackMyPet(obj).subscribe(res=>{
        console.log('hi',JSON.stringify(res))
        this.lat = Number(res[0].latitude);
        this.lng = Number(res[0].longitude);

          let geocoder = new google.maps.Geocoder;
          let latlng = {lat: this.lat, lng: this.lng};
          let that = this;
          geocoder.geocode({'location':latlng},function(results){
            console.log(results)
            that.fullAddress = results[0].formatted_address
            that.disableBtn = false
          })

      })
  }
  downloadTrack(){
    var obj ={
      petid:this.petid
    }
    this.loginService.downloadTrackMyPet(obj).subscribe(res=>{
      console.log(JSON.stringify(res))
      let profiledata = localStorage.getItem('user');
      var temp = JSON.parse(profiledata);
      var fileName = temp.name+'_'+res.petTrackdetailsdata[0].petname
      var options = {
        showLabels:true,
        headers: ["ID", "Latitude", "Longitude","Date","Time","Status","Pet Id","Pet Name"],
      }
      new Angular5Csv(res.petTrackdetailsdata, fileName,options);
    })
  }
  toggleMap(){
    this.voiceModule = false;
  }
}
