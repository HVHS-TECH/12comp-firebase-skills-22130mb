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
import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;

import { fb_authenticate }
    from './fb_io.mjs';
    window.fb_authenticate  = fb_authenticate;

import { fb_authstate }
    from './fb_io.mjs';
    window.fb_authstate  = fb_authstate;

import { fb_signout }
    from './fb_io.mjs';
    window.fb_signout  = fb_signout;

import { fb_writeto }
    from './fb_io.mjs';
    window.fb_writeto  = fb_writeto;
    
import { fb_read }
    from './fb_io.mjs';
    window.fb_read  = fb_read;
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
