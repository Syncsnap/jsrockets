setTimeout(function() {
	location.href = 'rocket.html'
}, 2000);

// set up var
var car = {
		make: 'VW',
		type: 'polo',
		color: 'Blue',
		isTurnedOn: false,
		numberOfWheels: 4,
		seats: [
				'seat1',
				'seat2', 
				'seat3', 
				'seat4'
				],
		// verander inhoud var
		turnOn: function() {
			this.isTurnedOn = true;
		}, 
		// pop-up window 
		fly: function (){
			alert('fly');
		},
		// auto aan en uit zetten binnen functie
		switchCar: function (isOn) {
			console.log('Turn car '+isOn)
			if (isOn == true) {
				this.isTurnedOn = true;
			}	else {
				this.isTurnedOn = false;
			}

		},
	};

// className veranderen
var doCoolStuff = function() {
	var currentClassName = document.getElementById("cool").className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

/*	document.getElementById("cool").className
		= "cool red"; */
