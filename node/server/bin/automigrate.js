'use strict';
var app = require('../server');
const args = require('minimist')(process.argv.slice(2));
console.log(args._[0])
var dataSource=app.dataSources.openwifitask;
for(let i=0;i<args._.length ;i++){
    console.log('\n \t ##generating model=>'+i+' =>'+args._[i])
 dataSource.automigrate(args._[i],function(err){
   if(err) throw err;
   else{
       console.log("####")
   }
   dataSource.disconnect();  
})
}