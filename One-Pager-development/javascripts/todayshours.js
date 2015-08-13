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
	
	var openIntersession1=["X","9:00am","9:00am","9:00am","9:00am","9:00am", "X"];
	
	var openIntersession2=["X","X","9:00am","9:00am","9:00am","9:00am", "8:00am"];
	
// Enter the time your library closes, starting with Sunday. If your library is 
// closed, enter "X" for the time.

	var close=["X","10:00pm","10:00pm","10:00pm","10:00pm","10:00pm","7:00pm"]; // Edit this line
	
	var closeIntersession1=["X","10:00pm","5:00pm","5:00pm","5:00pm","5:00pm","X"]; 
	
	var closeIntersession2=["X","5:00pm","5:00pm","5:00pm","5:00pm","5:00pm","X"]; 
	
	var closeIntersession3=["X","X","5:00pm","5:00pm","10:00pm","10:00pm","7:00pm"]; 
	
	
	
				
// Do not edit below this line
// -------------------------------------------------------------------
		
	var currentTime = new Date()
	var day = currentTime.getDay()
	var intersessionDate= currentTime.getDate();

	
		
		if (intersessionDate >=1 && intersessionDate <=5) {
	var openTime = openIntersession1[day];
	var closeTime = closeIntersession2[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=6 && intersessionDate <=12) {
	var openTime = openIntersession2[day];
	var closeTime = closeIntersession3[day];
	createHours(openTime,closeTime);
	}
	
	if (intersessionDate >=13 && intersessionDate <=15) {
	var openTime = open2[day];
	var closeTime = close[day];
	createHours(openTime,closeTime);
	}
		if (intersessionDate >=16 && intersessionDate <=22) {
	var openTime = openIntersession1[day];
	var closeTime = closeIntersession1[day];
	createHours(openTime,closeTime);
	}
	
	
	
	if (intersessionDate >=23 && intersessionDate <=31) {
	var openTime = openIntersession1[day];
	var closeTime = closeIntersession2[day];
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
