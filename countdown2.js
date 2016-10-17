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
   				app.t--;
   				app.updateView();
   				if (app.t === 0) {
   					clearInterval(app.intervalID);
   				}
   			}, 1000);
   		},
   		updateView: function(){
   			var minutes = Math.floor(app.t/60);
   			var secondes = app.t % 60;
   			$('h1').html(minutes + ':' + secondes);
   		},
   		reinitialize: function(){
   			var inputMinute = parseInt($('#inputMinute').val(),10);
   			var inputSecond = parseInt($('#inputSecond').val(),10);
   			app.t = inputMinute * 60 + inputSecond;
   			$('h1').html(inputMinute + ':' + inputSecond);
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
   	console.log('hello');



   });