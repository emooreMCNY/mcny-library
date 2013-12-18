// Today's Library Hours v.1 (March 30, 2011)
// Grand Valley State University Library Labs, 2011
// by Matthew Reidsma, reidsmam@gvsu.edu
// 
// Released under the GPL: http://www.gnu.org/licenses/gpl.html
//

// Configuration:
// ------------------------------------------------------------------

// Enter the time your library opens, starting with Sunday. If your library is closed,
// enter "X" for the time. In the following example, the library is closed on Sunday 
// and opens at 9am Monday through Friday. On Saturday, the library opens at 1:30pm. 
// The script will print whatever format you decide to use in these variables. Make 
// sure to leave the quotes!
//
// EXAMPLE:
//
// var open=["X","9:00am","9:00am","9:00am","9:00am","9:00am","1:30pm"];

	var open2=["X","9:00am","9:00am","9:00am","9:00am","9:00am","8:00am"]; // Edit this line 
	
	var openXmas=["X","9:00am","X","X","X","X","X"]; // Edit this line 
	
	var openNYE=["X","X","X","X","9:00am","9:00am","X"]; // Edit this line 
	
	var openIntersession=["X","9:00am","9:00am","9:00am","9:00am","9:00am","X"]; // Edit this line
	
// Enter the time your library closes, starting with Sunday. If your library is 
// closed, enter "X" for the time.

	var close=["X","10:00pm","10:00pm","10:00pm","10:00pm","10:00pm","7:00pm"]; // Edit this line
	
	var closeXmas=["X","5:00pm","X","X","X","X","X"]; // Edit this line
	
	var closeNYE=["X","X","X","X","5:00pm","5:00pm","X"]; // Edit this line
	
	var closeIntersession=["X","5:00pm","5:00pm","5:00pm","5:00pm","5:00pm","X"]; // Edit this line

			
// Do not edit below this line
// -------------------------------------------------------------------
		
	var currentTime = new Date()
	var day = currentTime.getDay()
	var intersessionDate= currentTime.getDate();
	
	if (intersessionDate >=1 && intersessionDate <=4) {
	var openTime = openNYE[day];
	var closeTime = closeNYE[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=5 && intersessionDate <=11) {
	var openTime = openIntersession[day];
	var closeTime = closeIntersession[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=12 && intersessionDate <=21) {
	var openTime = open2[day];
	var closeTime = close[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=22 && intersessionDate <=28) {
	var openTime = openXmas[day];
	var closeTime = closeXmas[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=29 && intersessionDate <=31) {
	var openTime = openNYE[day];
	var closeTime = closeNYE[day];
	createHours(openTime,closeTime);
	}
	
	
	
	function createHours(openTime, closeTime) 
	{ // Build the hours string
		if(openTime == "X") {
			var libhours = "Closed";
			document.write(libhours);
		} else {
			var libhours = "<strong>Open:</strong> " + openTime + " &#8211; " + closeTime;
			document.write(libhours);
		}
	}
