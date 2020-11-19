window.onload = function()
{
	setTime();
	setInterval("setTime()", 1000);
}

function setTime()
{
	document.getElementById("time").innerHTML = getTime();
}

function getTime()
{
	var release = new Date(2013, 05, 17); // date of last release
	var now = new Date(); // exact date and time that the user visits the site
	var difference = new Date(); // the difference between release and now

	var milliseconds = now.getTime() - release.getTime(); // number of milliseconds between now and the release
	difference.setTime(milliseconds); // sets difference to milliseconds

	// sets variables for each time interval 
	var years = now.getFullYear() - release.getFullYear();
	var months = difference.getMonth();
	var days = difference.getDate();
	var hours = difference.getHours();
	var minutes = difference.getMinutes();
	var seconds = difference.getSeconds();

	days = Math.round((years * 365.25) + (months * 30.44) + days);
	
	//allow hours, minutes, and seconds to be set at a constant width of two digits
	if (days < 10) days = "0" + days; // if DP release a new album then for days 0-99 there will be a constant width in line with the others
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;

	return "It's been " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds since Daft Punk released an album";

}