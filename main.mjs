/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise, fb_authenticate, fb_authstate, fb_signout, fb_writeto, fb_read, fb_readall, fb_update, wreakhavoc, fb_readsorted, fb_readonvalue } from './fb_io.mjs';
window.fb_initialise = fb_initialise;
window.fb_authenticate = fb_authenticate;
window.fb_authstate = fb_authstate;
window.fb_signout = fb_signout;
window.fb_writeto = fb_writeto;
window.fb_read = fb_read;
window.fb_readall = fb_readall;
window.fb_update = fb_update;
window.wreakhavoc = wreakhavoc;
window.fb_readsorted = fb_readsorted;
window.fb_readonvalue = fb_readonvalue;

/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
