   $(document).ready(function(){
      "use.strict";

   	window.app = {
   		t: 1500,
   		intervalID: null,
   		progressID: null,
   		count: 1,
   		init: function(){
   			this.listeners();
   		},
   		listeners: function(){
   			$('#btnStart').on('click', this.go);
   			$('#btnReinitialize').on('click', this.reinitialize);
   			$('#btnStop').on('click', this.stop);
   			$('#btnReset').on('click', this.reset);
         },
         go: function(){
            app.intervalID = setInterval(function(){
   				app.updateView();
   				app.t--;
   				;
   				if (app.t === 0) {
   					clearInterval(app.intervalID);
   				}
   			}, 1000);
   			// app.progressID = setInterval(function(){
   			// 	var largeur = $(".label").css("width");
   			// 	var width = 100;
   			// 	if (width <= 0) {
   			// 		app.stop();
   			// 	} else {
   			// 		width--;
   			// 		largeur = width - '%';
   			// 	}
   			// }, 1000);
   		},
   		updateView: function(){
   			var heures = Math.floor(app.t/3600);
   			var minutes = Math.floor((app.t % 3600)/60);
   			var secondes = app.t % 3600 % 60;

   			$('h1').html(this.addZero(heures) + ':' + this.addZero(minutes) + ':' + app.addZero(secondes));
   		},
   		addZero: function(nombre) {
   			if (nombre < 10) {
   				nombre = '0' + nombre;
   			}
   			return nombre;
   		},
   		reinitialize: function(){
   			var inputHour = parseInt($('#inputHour').val(),10);
   			var inputMinute = parseInt($('#inputMinute').val(),10);
   			var inputSecond = parseInt($('#inputSecond').val(),10);
   			app.t = (inputHour * 3600) + (inputMinute * 60) + inputSecond;
   			app.go();
   		},
   		stop: function(){
   			app.count++;
   			app.count % 2 === 0
   			clearInterval(app.intervalID);
   		},
   		reset: function(){
   			clearInterval(app.intervalID);
   			$('h1').html('00:25:00');
   			app.t = 1500;
   		},
   	}

   	app.init();

   });