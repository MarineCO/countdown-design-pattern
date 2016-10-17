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
   			var minutes = Math.floor(app.t/60);
   			var secondes = app.t % 60;

   			if (minutes < 10 && secondes < 10) {
   				$('h1').html('0' + minutes + ':' + '0' + secondes);
   			}
   			else if (minutes < 10 && secondes >= 10) {
   				$('h1').html('0' + minutes + ':' + secondes);
   			}
   			else if (minutes >= 10 && secondes < 10) {
   				$('h1').html(minutes + ':' + '0' + secondes);
   			}
   			else {
   				$('h1').html(minutes + ':' + secondes);
   			}
   		},
   		reinitialize: function(){
   			var inputMinute = parseInt($('#inputMinute').val(),10);
   			var inputSecond = parseInt($('#inputSecond').val(),10);
   			app.t = inputMinute * 60 + inputSecond;
   			app.go();
   		},
   		stop: function(){
   			app.count++;
   			app.count % 2 === 0
   			clearInterval(app.intervalID);
   		},
   		reset: function(){
   			clearInterval(app.intervalID);
   			$('h1').html('25:00');
   			app.t = 1500;
   		},
   	}

   	app.init();

   });