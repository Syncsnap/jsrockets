



//set variables 
var timer = null;
var countdownNumber = 10;

//functie aanmaken 
var changeState = function(state) {
	document.body.className = 'body-state' + state ;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
	//Vraag iedere ronde de classname op.
	document.getElementById('nervous').className = 'nervous';
	document.getElementById('cant-wait').className = 'cant-wait';
	//countdown
	
	if (state == 2) {
		timer = setInterval(function(){
			countdownNumber = countdownNumber - 1;
			document.getElementById('countdown').innerHTML = countdownNumber;
			
			// functie voor het flashen van een beeld op het scherm.
			if (countdownNumber > 4 && countdownNumber <=7) {
				//be nervous
				document.getElementById('nervous').className = 'nervous show';
			} 

			else {
				document.getElementById('nervous').className = 'nervous';
			} 

			if (countdownNumber > 1 && countdownNumber <=4) {
				//can't wait
				document.getElementById('cant-wait').className = 'cant-wait show'; 
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}
			if (countdownNumber <= 0) {
				changeState(3);
			};
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function ()
			{
				var randomNumber = Math.round(Math.random() *10);
				
				console.log('randomNumber ', randomNumber)
				//succes
				if (randomNumber > 3) {
					changeState(4);
				} else {
					changeState(5);
				};
			

			}, 2000);
		};
	}
			
	
