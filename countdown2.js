   $(document).ready(function(){
      "use.strict";

      window.app = {
         timeSeconds: 10,
         startT: null,
         intervalID: null,
         progressID: null,
         count: 1,
         timerID: null,

         init: function(){
            this.listeners();
         },

         listeners: function(){
            $('#btnStart').on('click', this.go.bind(this));
            $('#btnReinitialize').on('click', this.reinitialize.bind(this));
            $('#btnStop').on('click', this.stop.bind(this));
            $('#btnReset').on('click', this.reset.bind(this));
         },

         go: function(){
            this.stop();
            this.startT = this.t;
            this.intervalID = setInterval(function(){
               this.updateView();
               this.progress();
               this.timeSeconds--;
               if (this.timeSeconds < 0) {
                  clearInterval(this.intervalID);
               }
            }.bind(this), 1000);
         },

         progress: function(){
            var percentage = ((this.startT - this.timeSeconds) / this.startT)* 100;
            $('.bar').css('width', percentage + '%');
            $('.progress').css('height', percentage + '%');
            $('p').text(percentage + '%');
         },

         updateView: function(){
            var heures = Math.floor(this.timeSeconds/3600);
            var minutes = Math.floor((this.timeSeconds % 3600)/60);
            var secondes = this.timeSeconds % 3600 % 60;

            $('h1').html(this.addZero(heures) + ':' + this.addZero(minutes) + ':' + this.addZero(secondes));
         },

         addZero: function(nombre) {
            if (nombre < 10) {
               nombre = '0' + nombre;
            }
            return nombre;
         },

         reinitialize: function(){
            this.stop();
            var inputHour = parseInt($('#inputHour').val(),10);
            var inputMinute = parseInt($('#inputMinute').val(),10);
            var inputSecond = parseInt($('#inputSecond').val(),10);
            if (isNaN(inputHour)){
               inputHour = 0;
            }
            if (isNaN(inputMinute)){
               inputMinute = 0;
            }
            if (isNaN(inputSecond)){
               inputSecond = 0;
            }
            this.timeSeconds = (inputHour * 3600) + (inputMinute * 60) + inputSecond;
            this.go();
         },

         stop: function(){
            this.count++;
            this.count % 2 === 0
            clearInterval(this.intervalID);
         },

         reset: function(){
            this.stop();
            clearInterval(this.intervalID);
            $('h1').html('00:25:00');
            this.timeSeconds = 1500;
         },
      }

      app.init();

   });