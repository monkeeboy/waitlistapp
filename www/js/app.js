// If you want to prevent dragging, uncomment this section
/*
function preventBehavior(e) 
{ 
  e.preventDefault(); 
};
document.addEventListener("touchmove", preventBehavior, false);
*/

// initialize global vars
var myScroll;

ready = function(){
	// initialize iScroll
	myScroll = new iScroll('wrapper', {
		// set iScroll options here
	});
}

/*** INITIALIZATION ***/
// this is only for testing a web browser - remove from production
if(navigator.userAgent.indexOf('Safari') > -1){
	window.addEventListener('load', ready, false);
} else { // this is the PhoneGap implementation - use this in production
	window.addEventListener('load', function(){
		document.addEventListener("deviceready",ready,false);
	}, false);
}