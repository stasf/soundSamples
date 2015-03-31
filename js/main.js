(function() {
	var app = angular.module('tileSet', ['ui.router']);


	//UI Router 
	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'index.html'
			})
			.state('checkout', {
				url: '/checkout',
				templateUrl: '/html/checkout.html'
			})
		}])

	// function GetTotal() {
	// 	var checkBoxes = document.getElementsByClassName("priceCheck");
	// 	var totalPrice = 0.0;
	// 	for (var i = 0; i < checkBoxes.length; i++) {
	// 		if (checkBoxes[i].checked) {
	// 			totalPrice += parseFloat(checkBoxes[i].value);
	// 		}
	// 	}
	// 	document.getElementById("totalPrice").innerHTML = "Total: $" + totalPrice.toFixed(2);
	// }

	//Sound Tiles JSOn
	function TileController() {
		var self = this;

		self.totalPrice = 0.0;
		self.tiles = [{
			"name": "Kick",
			"description": "Classic kick, 100hz resonance",
			"price": 0.25,
			"audioSrc": "sounds/kick.wav"
		}, {
			"name": "Snare",
			"description": "808 snare used in old school Hip-Hop",
			"price": 0.15,
			"audioSrc": "sounds/snare.wav"
		}, {
			"name": "Hat", 
			"description": "Very short attack hat with sizzle", 
			"price": 0.09,
			"audioSrc": "sounds/hat.wav"
		}, {
			"name": "Clap", 
			"description": "Classic clap sample used in most trap", 
			"price": 0.50,
			"audioSrc": "sounds/clap.wav"
		}, {
			"name": "Crash", 
			"description": "Cymbal crash with long decay", 
			"price": 0.25,
			"audioSrc": "sounds/crash.wav"
		}, {
			"name": "Piano Stab", 
			"description": "Deep E note piano stab", 
			"price": 0.90,
			"audioSrc": "sounds/pianostab.wav"
		}, {
			"name": "Piano Stab 2", 
			"description": "A different piano stab", 
			"price": 0.25,
			"audioSrc": "sounds/pianostab2.wav"
		}, {
			"name": "Bass Phaser", 
			"description": "Short phaser sample with bass", 
			"price": 0.10,
			"audioSrc": "sounds/bassphaser.wav"
		}, {
			"name": "Bass Stab", 
			"description": "Simple bass stab", 
			"price": 0.25,
			"audioSrc": "sounds/bassstab.wav"
		}, {
			"name": "Bass Woh", 
			"description": "A short bass \"woh\" sample", 
			"price": 0.30,
			"audioSrc": "sounds/basswoh.wav"
		}, {
			"name": "Bass Wop", 
			"description": "A bass wop sample", 
			"price": 0.25,
			"audioSrc": "sounds/basswop.wav"
		}, {
			"name": "Sharp Tom", 
			"description": "A sharp counter sound tom to be used with deep tom", 
			"price": 0.18,
			"audioSrc": "sounds/hittom.wav"
		}, {
			"name": "Metal Drop", 
			"description": "Like a liquid piece of metal dropping", 
			"price": 0.20,
			"audioSrc": "sounds/metaldrop.wav"
		}, {
			"name": "Talking Bass", 
			"description": "Popular talking bass sample", 
			"price": 0.60,
			"audioSrc": "sounds/talkbass.wav"
		}, {
			"name": "Stab Phaser", 
			"description": "Phasing stab sample", 
			"price": 0.07,
			"audioSrc": "sounds/stabphaser.wav"
		}, {
			"name": "Full Kit 1", 
			"description": "Multiple samples assembled in a single kit", 
			"price": 1.19,
			"audioSrc": "sounds/kit2.wav"
		}, {
			"name": "Full Kit 2", 
			"description": "Multiple sampels assembled in a single kit", 
			"price": 1.19,
			"audioSrc": "sounds/kit3.wav"
		}, {
			"name": "Melody E", 
			"description": "Sample melody in root E", 
			"price": 1.19,
			"audioSrc": "sounds/melodyE.wav"
		}

		];

	}

	//Directive to show the tiles
	app.directive('soundTile', function() {
		return {
			restrict: 'E',
			templateUrl: 'html/sound-tile.html'
		}
	})


	// app.controller('PriceController', function($scope, $localStorage) {

	// });


	app.controller('TileController', [
		TileController
	]);

})();