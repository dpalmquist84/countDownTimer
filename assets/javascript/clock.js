$(document).ready(function(){

var audio = new Audio("./assets/audio/alarm.mp3");
var time = 5;
var intervalId;
minutes = 24;
seconds = 60;


$("#stop").on("click", stop);
$("#start").on("click", run);
$("#reset").on("click", reset);

function run() {
	audio.pause();
	intervalId = setInterval(decrement, 1000);
	if (minutes === 0 && seconds === 0 ) {
		audio.play();
	}

}

function decrement(){
	seconds--;

$("#display").html(minutes + ":" + seconds);
    if (seconds < 10 && seconds > 0) {
    	$("#display").html(minutes + ":0" + seconds)

          
    }
	else if(seconds === 0){
		$("#display").html(minutes + ":00")
		minutes--;
		seconds = 60;
	} else if (seconds === 0 && minutes === 0 ) {
		audio.play();
		setTimeout(stop)
		stop();
		start();
	}
}

function stop() {
	audio.pause();
	clearInterval(intervalId);
}

function reset() {
	stop();
	$("#display").html("25:00");
	minutes = 25;
	seconds = 60;
	run();
    
}
// run();




});