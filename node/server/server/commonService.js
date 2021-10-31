let app=require('../server'),
loopback=app.dataSources.openwifitask.connector;


function commonService(){

    this.trackMyPet = function(req,callback){
        console.log('\n__cool____board ',(req))
        let obj = {};
        let latitude;
        let longitude;
        if(typeof(req) == "object"){
            obj = JSON.stringify(req[0]);
            latitude = obj.split(":")[1].split(",")[0];
            longitude = obj.split(":")[2].split("}")[0];
            console.log(obj,latitude,longitude);

            var livedata = {
                livelat:latitude,
                livelng:longitude,
                status:'A',
                createddate: new Date()
            }
            app.models.Livelocation.update({"id":1},livedata,(err,liveres)=>{
                console.log('____',liveres)
            })
        }
      
        let query1 = 'select curpet.currentpetid from currentpetmst curpet';
        loopback.query(query1,req,function(err,queryRes1){
            console.log('____',queryRes1)
            let query = 'select pet.alarmstatus from petdetails pet where pet.id='+queryRes1[0].currentpetid;
            loopback.query(query,req,function(err,queryRes){
                console.log(JSON.parse(JSON.stringify(queryRes)))
                var stat = JSON.parse(JSON.stringify(queryRes))
                if(stat[0].alarmstatus ==='1'){
                    let querySet = 'Update petlocation set status="X";'
                    loopback.query(querySet,req,function(err,querySetRes){
                        var today = new Date();
                        var  petObj={
                                latitude:latitude,
                                longitude:longitude,
                                createddate:new Date(),
                                createdtime: today.getHours() + ":" + today. getHours(),
                                status:'A',
                                currentpet: queryRes1[0].currentpetid
                            }
                        app.models.Petlocation.create(petObj).then(res1=>{
                            let updatedObj = {
                                alarmstatus:0
                            }
                            app.models.Petdetails.update({id:queryRes1[0].currentpetid},updatedObj).then(res=>{
                                callback(null,parseInt(stat[0].alarmstatus))
                            })
                        })
                    })
                }else{
                    callback(null,parseInt(stat[0].alarmstatus))
                }
            })
        })
        // callback(null,req)
    }

    this.alarm = function(req,callback){
        console.log('\n __cool____angular ',req)
        let updatedObj = {
            alarmstatus:1
        }
        var reqq =req[0].currentpetid
        app.models.Currentpetmst.update({"id":1},req[0],(err,res)=>{
            console.log('res',res)
            app.models.Petdetails.update({id:parseInt(reqq)},updatedObj).then(res1=>{
                console.log('res1',res1)
                setTimeout(function(){
                    recursiveFunc(reqq,(response)=>{
                        console.log('i came back',response)
                        var stat = JSON.parse(JSON.stringify(response))
                        callback(null,stat)
                    })
                },6000)
            })
        })
    }

  function recursiveFunc(req,callback){
    //   ORDER BY id DESC LIMIT 1
        let query = 'select petloc.* from petlocation petloc where petloc.currentpet='+req+' and petloc.status="A"';
        console.log(query)
        // var req
        loopback.query(query,function(err,queryRes){
            console.log('queryRes',queryRes)
            if(queryRes.length > 0){
                callback(queryRes)
            }else{
                recursiveFunc(req,callback)
            }
          
        })
    }
    this.petTrackdetails = function(req,callback){
        let query = 'select petloc.* ,petd.petname from petlocation petloc, petdetails petd where petloc.currentpet='+req[0].petid +' and petd.id ='+req[0].petid+' ORDER BY id;'
        loopback.query(query,function(err,queryRes){
            console.log('queryRes',queryRes)
            callback(null,queryRes)
        })
    }
}

commonService=new commonService();

module.exports=commonService;
