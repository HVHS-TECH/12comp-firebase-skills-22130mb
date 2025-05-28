//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_

// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { update } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { query, orderByChild, limitToFirst } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

/**************************************************************/
// EXPORT FUNCTIONS
var fb_gameDB;
var fb_uid;
// List all the functions called by code or html outside of this module
function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    console.log("hello world");
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyCHDtQ5nuCxgp_XCL_RtR7YVHv8mO1rhmc",
        authDomain: "comp-2025-max-bergman-4bb13.firebaseapp.com",
        databaseURL: "https://comp-2025-max-bergman-4bb13-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-max-bergman-4bb13",
        storageBucket: "comp-2025-max-bergman-4bb13.firebasestorage.app",
        messagingSenderId: "75891205088",
        appId: "1:75891205088:web:9ce6dd10fe8f59fb6f8185",
        measurementId: "G-860HVWZ49V"
    };

    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    fb_gameDB = getDatabase(FB_GAMEAPP);

    console.info(fb_gameDB);
}

function fb_authenticate() {
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();

    // The following makes Google ask the user to select the account

    PROVIDER.setCustomParameters({

        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
         console.log(result);
        console.log(result.user.uid);
        fb_uid = result.user.uid;
    })
        .catch((error) => {
            console.log(error);
        });
}

function fb_authstate() {
    const AUTH = getAuth();

    onAuthStateChanged(AUTH, (user) => {

        if (user) {

            console.log("user logged in");
            console.log(user);
        } else {

            console.log("user logged out");

        }

    }, (error) => {

        console.log("error happened");
        console.log(error);

    });
}

function fb_signout() {
    const AUTH = getAuth();

    signOut(AUTH).then(() => {

        console.log("logout success");

    })

        .catch((error) => {

            console.log("logout error");
            console.log(error);

        });
}


function fb_writeto() {

    const dbReference = ref(fb_gameDB, ("Users/" + fb_uid));
    var UserInformation = { highscore: 50, Name: "person" };
    set(dbReference, UserInformation).then(() => {

        console.log("written the following indformation to the database");
        console.log(UserInformation);
    }).catch((error) => {

        console.log("write error");
        console.log(error);
    });
}

function fb_read() {
    const dbReference = ref(fb_gameDB, ("Users/" + fb_uid));

    get(dbReference).then((snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {

            console.log("successful read");
            console.log(fb_data);
        } else {

            console.log("no record found");
            console.log(fb_data);
        }

    }).catch((error) => {

        //❌ Code for a read error goes here
        console.log("read error");
        console.log(error);
    });
}
function fb_readall() {
    const dbReference = ref(fb_gameDB, ("Users/" + fb_uid));

    get(dbReference).then((snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {

            console.log("read all success")
            console.log(fb_data);
        } else {

            console.log("no record found")
            console.log(fb_data);
        }

    }).catch((error) => {

        console.log("read all error")
        console.log(error);
    });
}

function fb_update() {
    const dbReference = ref(fb_gameDB, ("Users/" + fb_uid));
    var UserInformation = { highscore: 42, Name: "joseph" }
    update(dbReference, UserInformation).then(() => {

        console.log("update success")
        console.log(fb_gameDB);

    }).catch((error) => {

        console.log("update error")
        console.log(error);

    });
}

function fb_readsorted(){
const dbReference= query(ref(fb_gameDB, ("Users/" + fb_uid)), orderByChild("highscore"), limitToFirst(5));

    get(dbReference).then((snapshot) => {   
    get(dbReference).then((allScoreDataSnapshot) => {
    allScoreDataSnapshot.forEach(function (userScoreSnapshot) {
    var obj = userScoreSnapshot.val();
    console.log(obj);
     get(dbReference).then((Snapshot) => {
    });

        });
    });

        var fb_data = snapshot.val();

      if (fb_data != null) {
         get(dbReference).then((allScoreDataSnapshot) => {
        allScoreDataSnapshot.forEach(function (userScoreSnapshot) {
            var obj = userScoreSnapshot.val();
            console.log(obj);
        });
    });

          console.log("successful read");

        } else {

           console.log("no record found");
            
        }

    }).catch((error) => {

        console.log("read error");
        console.log(error);
    });
}

function fb_readonvalue() {
const dbReference = ref(fb_gameDB, ("Users/" + fb_uid));

    onValue(dbReference, (snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {

            console.log (snapshot.val());
            console.log("successful read");

        } else {

            //✅ Code for no record found goes here
            console.log("no record found");
            console.log(error)
        }

    });
}



function wreakhavoc() {
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyCtqOoxnHxsj7vs-AfrD8vo-20mA5Sq17A",
        authDomain: "comp-2025-joseph.firebaseapp.com",
        databaseURL: "https://comp-2025-joseph-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-joseph",
        storageBucket: "comp-2025-joseph.firebasestorage.app",
        messagingSenderId: "85501129840",
        appId: "1:85501129840:web:79c64e1947643f22bc70b5",
        measurementId: "G-BEE5KXTKTT"
    };

    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    const FB_GAMEDB = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB);

    const dbReference = ref(FB_GAMEDB, "Users/UserID");
    var UserInformation = { highscore: 420, Name: "joseph is a big dummy " };
    set(dbReference, UserInformation).then(() => {

        console.log("written the following indformation to the database");
        console.log(UserInformation);
    }).catch((error) => {

        console.log("write error");
        console.log(error);
    });
}

/**************************************************************/
export {
  fb_initialise,
  fb_authenticate,
  fb_authstate,
  fb_signout,
  fb_writeto,
  fb_read,
  fb_readall,
  fb_update,
  wreakhavoc,
  fb_readsorted,
  fb_readonvalue
};
/**************************************************************/
// END OF CODE
/**************************************************************/