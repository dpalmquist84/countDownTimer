$(document).ready(function(){

var audio = new Audio("./assets/audio/alarm.mp3");
var time = 5;
var intervalId;
var minutes = 24;
var seconds = 60;


$("#stop").on("click", stop);
$("#start").on("click", run);
$("#reset").on("click", reset);

function run() {
	
	intervalId = setInterval(decrement, 1000);
	if (minutes === 0 && seconds === 0 ) {
		audio.play();
		reset();
    console.log("minutes: " + minutes + "seconds: " + seconds)
	}


}

function decrement(){
	seconds--;

$("#display").html(minutes + ":" + seconds);
    if (seconds < 10 && seconds > 0) {
    	$("#display").html(minutes + ":0" + seconds)
    console.log("minutes: " + minutes + "seconds: " + seconds)

          
    }
	else if(seconds === 0  && minutes > 0){
		$("#display").html(minutes + ":00")
		minutes--;
		seconds = 60;
	} else if (seconds === 0 && minutes === 0 ) {
		audio.play();
		setTimeout(function(){
		stop();	
	}, 3000)
		
		reset();
	console.log("minutes: " + minutes + "seconds: " + seconds)
	}
}

function stop() {
	
	clearInterval(intervalId);
	$("#display").text(`${minutes}:${seconds}`)
}

function reset() {
	stop();
	audio.pause()
	$("#display").html("25:00");
	seconds++;
	minutes = 24;
	seconds = 60;
	run();
    
}





});