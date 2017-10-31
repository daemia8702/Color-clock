
var ora = document.getElementById('ora');
var szin = document.getElementById('szin');

function ido(){

	//create a time instance
	var time = new Date();

	//Getting system time
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if(hours.length < 2){
		hours = '0' + hours;
	}

	if(minutes.length < 2){
		minutes = '0' + minutes;
	}

	if(seconds.length < 2){
		seconds = '0' + seconds;
	}

	//Display time
	var timeString = hours + ':' + minutes + ':' + seconds;
	//Displaying hex color code
	var hexString = '#' + hours + minutes + seconds;

	ora.textContent = timeString;
	szin.textContent = hexString;

	// selecting body and giving to the background the hex color code
	document.querySelector('body').style.background = hexString;

}

ido();
setInterval(ido, 1000);