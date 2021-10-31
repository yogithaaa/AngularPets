let app=require('../server'),
    loopback=app.dataSources.openwifitask.connector;
 function Register(){

 /**
 * @author Dharani Sai 
 * register:This Function is used to save the Registration details
 * @param {*} registerdata 
 * @param {*} callback 
 */

    this.register=function(registerdata,callback){
     
      console.log("at regisss",registerdata);
              app.models.Usermaster.create(registerdata[0],(err,savedRes)=>{
                console.log('___________',err)
                console.log('___________',savedRes)
                callback(null, err);
              })
    }
/**
 * @author Dharani Sai 
 * excel:This Function is used to save the excel details
 * @param {*} exceldata 
 * @param {*} callback 
 */
    this.excel=function(exceldata,callback){
      // exceldata.status='A';
      console.log("at regisss",exceldata);
              app.models.excel.create(exceldata[0],(err,savedRes)=>{
                console.log('___________',err)
                console.log('___________',savedRes)
                callback(null, err);
              })
    }

 /**
 */

this.petdetails=function(petdetailsdata,callback){
     
  console.log("at regisss",petdetailsdata);
  petdetailsdata[0].alarmstatus = 0
          app.models.petdetails.create(petdetailsdata[0],(err,savedRes)=>{
            console.log('___________',err)
            console.log('___________',savedRes)
            callback(null, err);
          })
}
this.forgotPassword = function(data,callback){
  console.log('pet',JSON.stringify(data))
  let query = "SELECT * FROM usermaster usr WHERE usr.email ="+"'"+data[0].email+"'"
  console.log('\n666666666,',query)
  loopback.query(query,data,function(err,checkedRes1){
    console.log('666666666,',checkedRes1)
    var checkedRes = JSON.parse(JSON.stringify(checkedRes1))
    console.log(checkedRes)
    if(checkedRes.length >0){
      if(checkedRes[0].mobilenumber === data[0].phonenumber){
        app.models.Email.send({
          to: checkedRes[0].email,
          from: 'petTracking@gmail.com',
          subject: '*Confidential Pet Tracking Password Recovery',
          text: 'Pet Lovers',
          html: "<body><div class='container'><div class='jumbotron'><h1>Hello, "+checkedRes[0].name +"</h1><p><b>Your Credentials are</b></p><p>Username:<b>"+checkedRes[0].email+"</b></p><p>Password:<b>"+checkedRes[0].useMe+"</b></p><img src='https://cache.desktopnexus.com/thumbseg/1445/1445774-bigthumbnail.jpg'></div></div></body>"
        }, function(err, mail) {
          console.log('email sent!');
          callback(null,((checkedRes)))
        })
       }else{
        callback(null, 404);
       }
    }else{
      callback(null,403)
    }
  })

}
 this.updatePassword = function(data,callback){
   console.log('hehe',data)
  app.models.Usermaster.update({id:data[0].id},data[0]).then(res=>{
    callback(null,res)
  })
 }

 }
 Register=new Register();

 module.exports=Register;
