/**
 * Created by jteam on 14.05.2016.
 */
var Timer = {
	counter: 0,
	interval: {},

	onInit: function()
	{
		var self = Timer;

		document.getElementById('start').onclick = self.start;
		document.getElementById('stop').onclick = self.stop;
		document.getElementById('clear').onclick = self.clear;

	}, // onInit

	start: function()
	{
		var self = Timer;

		self.interval = setInterval(self.run, 100);
		document.getElementById('start').style.display = 'none';
		document.getElementById('stop').style.display = 'inline-block';
	}, // start

	stop: function()
	{
		var self = Timer;

		clearInterval(self.interval);

		document.getElementById('start').style.display = 'inline-block';
		document.getElementById('stop').style.display = 'none';
		document.getElementById('start').innerHTML = 'Continue';
	}, // end stop

	clear: function()
	{
		var self = Timer;

		self.stop();

		self.counter = 0;

		self.updateTime();
		document.getElementById('start').innerHTML = 'Start';
	}, // end stop

	run: function()
	{
		var self = Timer;

		self.counter += 100;

		self.updateTime();
	},

	updateTime: function() {
		var self = Timer;

		var timeData = self.getConvertedTimeData(self.counter);

		var fullTimeStr = timeData.hours + ':' + timeData.minutes + ':' + timeData.seconds;
		var milisecondsStr = timeData.milliseconds;

		document.getElementsByClassName("full-time")[0].innerHTML = fullTimeStr;
		document.getElementsByClassName("miliseconds")[0].innerHTML = milisecondsStr;
	},

	getConvertedTimeData: function (ms) {
		var milliseconds = parseInt((ms%1000)/100),
			seconds = parseInt((ms/1000) % 60),
			minutes = parseInt((ms /(1000 * 60)) % 60),
			hours = parseInt((ms /(1000 * 60 * 60)) % 24);

		var data = {
			hours : (hours < 10) ? "0" + hours : hours,
			minutes : (minutes < 10) ? "0" + minutes : minutes,
			seconds : (seconds < 10) ? "0" + seconds : seconds,
			milliseconds : milliseconds
		}

		return data;
	} // end getConvertedTimeData
}

Timer.onInit();