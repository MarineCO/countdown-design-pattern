   $(document).ready(function(){

   	window.app = {
   		t: 1500,
   		intervalID: null,
   		count: 1,
   		init: function(){
   			app.listeners();
   		},
   		listeners: function(){
   			$('#btnStart').on('click', app.go);
   			$('#btnReinitialize').on('click', app.reinitialize);
   			$('#btnStop').on('click', app.stop);
   			$('#btnReset').on('click', app.reset);
   		},
   		go: function(){
   			app.intervalID = setInterval(function(){
   				app.updateView();
   				app.t--;
   				if (app.t === 0) {
   					clearInterval(app.intervalID);
   				}
   			}, 1000);
   		},
   		updateView: function(min, sec){
   			var heures = Math.floor(app.t/3600);
   			var minutes = Math.floor((app.t % 3600)/60);
   			var secondes = app.t % 3600 % 60;

   			$('h1').html(app.addZero(heures) + ':' + app.addZero(minutes) + ':' + app.addZero(secondes));
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