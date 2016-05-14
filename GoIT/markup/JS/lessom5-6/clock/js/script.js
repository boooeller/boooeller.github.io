function currentTime() {

	var time = new Date()

	hours= time.getHours();
	mins= time.getMinutes();
	secs= time.getSeconds();

	if (hours < 10) {
			hours = "0" + hours 
		}
	if (mins < 10) {
		mins = "0" + mins
		}
	if (secs < 10) {
		secs = "0" + secs
		}

	time = hours+':'+mins+':'+secs;
	
	var showClock = document.getElementById('clock');
	
	showClock.innerHTML = time;	
	
	setTimeout("currentTime()", 500);
}

currentTime();