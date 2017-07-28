$(document).ready(function(){

var audio = new Audio("./assets/audio/alarm.mp3");
var time = 1500;
var intervalId;


$("#stop").on("click", stop);
$("#start").on("click", run);
$("#reset").on("click", reset);

function run() {
	intervalId = setInterval(decrement, 1000);

}

function decrement(){
	time--

$("#display").html("<h4>" + time + "</h4>");

	if(time === 0){
		audio.play();
		stop();
	}
}

function stop() {
	clearInterval(intervalId);
}

function reset() {
	time = 1500;
	$("#display").html("<h4>" + time + "</h4>");

}
// run();




});