var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

  // helper function to prevent Objective C bleed over into javascript
  function bool2ObjC(value) {
    
    if(value === true) {
      return 'YES';
    } else if(value === false) {
      return 'NO'
    }

    return value.toUpperCase();
  }


var  FlurryPlugin= {

  // These functions must be called before you start the FlurryPlugin session
  setAppVersion:function(version,successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'setAppVersion', [version]);
  },

  // argument must be Yes or No, because it's objective C
 setShowErrorInLogEnabled:function(enableValue, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setShowErrorInLogEnabled', [bool2ObjC(enableValue)]);
  },

  // argument must be Yes or No, because it's objective C
  setEventLoggingEnabled:function(enableValue, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setEventLoggingEnabled', [bool2ObjC(enableValue)]);
  },

  // argument must be Yes or No, because it's objective C
  setDebugLogEnabled:function(enableValue, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setDebugLogEnabled', [bool2ObjC(enableValue)]);
  },

  // argument must be Yes or No, because it's objective C
  setSecureTransportEnabled:function(enableValue, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setSecureTransportEnabled', [bool2ObjC(enableValue)]);
  },

  // seconds must be an integer
  setSessionContinueSeconds:function(seconds, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setSessionContinueSeconds', [seconds]);
  },

  // argument must be Yes or No, because it's objective C
  setCrashReportingEnabled:function(enableValue, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setCrashReportingEnabled', [bool2ObjC(enableValue)]);
  },

  // End of functions that must be called before Flurry session starts

  // key is a string
  startSession:function(key,successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'startSession', [key]);
  },

  init:function(key,successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'init', [key]);
  },

  getAgentVersion:function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'getAgentVersion', []);
  },

  endSession:function(successCallback,failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'endSession', []);
  },

  // event must be a string
  logEvent:function(event, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'logEvent', [event]);
  },

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  logEventWithParameters:function(event, parameters, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'logEventWithParameters', [event, parameters]);
  },

  logPageView:function(successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'logPageView', []);
  },

  // timed must be Yes or No, because it's objective C
  logTimedEvent:function(event, timed, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'logTimedEvent', [event, bool2ObjC(timed)]);
  },

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // timed must be Yes or No, because it's objective C
  logTimedEventWithParameters:function(event, parameters, timed, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'logTimedEventWithParameters', [event, parameters, bool2ObjC(timed)]);
  },

  endTimedEvent:function(event, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'endTimedEvent', [event]);
  },

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // only used if you want to override the original parameters
  endTimedEventWithParameters:function(event, parameters, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'endTimedEventWithParameters', [event, parameters]);
  },

  // userID must be a string
  setUserID:function(userID, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setUserID', [userID]);
  },

  // gender must be a string. male and female are acceptable values
  setGender:function(gender, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setGender', [gender]);
  },

  // age must be an integer
  setAge:function(age, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setAge', [age]);
  },

  // latitude and longitude must be doubles; horizontal and vertical accuracy must be float
  setLatitude:function(latitude, longitude, horizontalAccuracy, verticalAccuracy, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'setLatitude', [latitude,longitude,horizontalAccuracy,verticalAccuracy]);
  },

  // argument must be Yes or No, because it's objective C
  setSessionReportsOnCloseEnabled:function (enabled, successCallback, failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'setSessionReportsOnCloseEnabled', [bool2ObjC(enabled)]);
  },

  // argument must be Yes or No, because it's objective C
  setSessionReportsOnPauseEnabled:function (enabled, successCallback, failureCallback) {
    return exec(successCallback, failureCallback, 'Flurry', 'setSessionReportsOnPauseEnabled', [bool2ObjC(enabled)]);
  },

  logError:function(errorID, message, successCallback, failureCallback) {
    return exec( successCallback, failureCallback, 'Flurry', 'logError', [errorID, message]);
  }

};
module.exports=FlurryPlugin;


