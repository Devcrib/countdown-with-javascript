var secondsRemaining;
var intervalHandle;
function resetPage(){
	document.getElementById("inputArea").style.display ="block";
}
//
function tick(){
	var timeDisplay = document.getElementById("time");

	var min = Math.floor(secondsRemaining/60);
	var sec = secondsRemaining - (min * 60);

	if(sec < 10){
		sec = "0" + sec;
	}

	var message = min + " : " + sec;
	timeDisplay.innerHTML = message;

	if(secondsRemaining === 0){
		alert("Done");
		clearInterval(intervalHandle);
		resetPage();
	}
	secondsRemaining--;
}
function startCountdown(){
	var minutes = parseInt(document.getElementById("minutes").value);
	if(isNaN(minutes)){
		alert("Please enter a number");
		return;
	}

	secondsRemaining = minutes * 60;

	intervalHandle = setInterval(tick,1000);

	document.getElementById("inputArea").style.display = "none";
}
// function alertMinu(){
// 	var minu = parseInt(document.getElementById("minutes").value);
// 	alert(minu);
// }
window.onload = function(){
	var inputName = document.createElement("input");
	inputName.setAttribute("type","text");
	inputName.setAttribute("id","minutes");

	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start Countdown");

	document.getElementById("inputArea").appendChild(inputName);
	document.getElementById("inputArea").appendChild(startButton);
	//document.getElementById("inputArea").innerHTML = "Are you fucking sick? No, just lemme Know!"

	startButton.onclick = function(){
		startCountdown();
	}
	// startButton.onclick = function(){
	// 	alertMinu();
	// }
}
//