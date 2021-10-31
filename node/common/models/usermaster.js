'use strict';

module.exports = function(Usermaster) {

    let  registrationService=require('../../server/server/register');
    let  commonService=require('../../server/server/commonService');

/**
 * @author Dharani Sai 
 * excel:This Function is used to save the registerdata details
 * @param {*} registerdata 
 * @param {*} callback 
 */
    Usermaster.register = function(registerdata, callback) {
        console.log("dataaa",registerdata)
        registrationService.register(registerdata, function(err, result) {
            callback(null, result);
        });
    };
    
    Usermaster.remoteMethod('register', {
        accepts: { arg: 'registerdata', type: 'array' },
        returns: { arg: 'registerdata', type: 'array' },
        http: {
            path: '/register',
            verb: 'post'
        }
    });
/**
 * @author Dharani Sai 
 * excel:This Function is used to save the excel details
 * @param {*} exceldata 
 * @param {*} callback 
 */

    Usermaster.excel = function(exceldata, callback) {
        console.log("dataaa",exceldata)
        registrationService.excel(exceldata, function(err, result) {
            callback(null, result);
        });
    };
    
    Usermaster.remoteMethod('excel', {
        accepts: { arg: 'exceldata', type: 'array' },
        returns: { arg: 'exceldata', type: 'array' },
        http: {
            path: '/excel',
            verb: 'post'
        }
    });

/** 
 */
Usermaster.petdetails = function(petdetailsdata, callback) {
    console.log("dataaa",petdetailsdata)
    registrationService.petdetails(petdetailsdata, function(err, result) {
        callback(null, result);
    });
};

Usermaster.remoteMethod('petdetails', {
    accepts: { arg: 'petdetailsdata', type: 'array' },
    returns: { arg: 'petdetailsdata', type: 'array' },
    http: {
        path: '/petdetails',
        verb: 'post'
    }
});

Usermaster.petTrackdetails = function(petTrackdetailsdata, callback) {
    console.log("dataaa",petTrackdetailsdata)
    commonService.petTrackdetails(petTrackdetailsdata, function(err, result) {
        callback(null, result);
    });
};

Usermaster.remoteMethod('petTrackdetails', {
    accepts: { arg: 'petTrackdetailsdata', type: 'array' },
    returns: { arg: 'petTrackdetailsdata', type: 'array' },
    http: {
        path: '/petTrackdetails',
        verb: 'post'
    }
});
Usermaster.trackMyPet = function (sampleData ,callback) {
    commonService.trackMyPet(sampleData,function (err, result) {
    callback(null, result);
  })
}

Usermaster.remoteMethod('trackMyPet', {
    accepts: { arg: 'Obj', type: 'array' },
    returns: { arg: 'Obj', type: 'object', root: true },
  http: {
    path: '/trackMyPet',
    verb: 'get'
  }
});

  Usermaster.alarm = function (sampleData ,callback) {
    commonService.alarm(sampleData,function (err, result) {
    callback(null, result);
  })
}

Usermaster.remoteMethod('alarm', {
    accepts: { arg: 'Obj', type: 'array' },
    returns: { arg: 'Obj', type: 'array', root: true },
  http: {
    path: '/alarm',
    verb: 'get'
  }
});

Usermaster.forgotPassword = function(Obj, callback) {
    registrationService.forgotPassword(Obj, function(err, result) {
        callback(null, result);
    });
};

    Usermaster.remoteMethod('forgotPassword', {
    accepts: { arg: 'Obj', type: 'array'  },
    returns: { arg: 'Obj', type: 'array', root: true },
    http: {
        path: '/forgotPassword',
        verb: 'post'
    }
});
Usermaster.updatePassword = function(updatePassword, callback) {
    console.log("dataaa",updatePassword)
    registrationService.updatePassword(updatePassword, function(err, result) {
        callback(null, result);
    });
};

Usermaster.remoteMethod('updatePassword', {
    accepts: { arg: 'updatePassword', type: 'array' },
    returns: { arg: 'updatePassword', type: 'array' },
    http: {
        path: '/updatePassword',
        verb: 'post'
    }
});
};
