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
         $('#btnStart').on('click', this.go.bind(this));
         $('#btnReinitialize').on('click', this.reinitialize.bind(this));
         $('#btnStop').on('click', this.stop.bind(this));
         $('#btnReset').on('click', this.reset.bind(this));
      },
      go: function(){
         this.stop();
         this.intervalID = setInterval(function(){
           this.updateView();
           this.t--;
           ;
           if (this.t === 0) {
             clearInterval(this.intervalID);
          }

       }.bind(this), 1000);

             // app.progressID = setInterval(function(){
            //    var largeur = $(".label").css("width");
            //    var width = 100;
            //    if (width <= 0) {
            //       app.stop();
            //    } else {
            //       width--;
            //       largeur = width - '%';
            //    }
            // }, 1000);
      },
      updateView: function(){
         var heures = Math.floor(this.t/3600);
         var minutes = Math.floor((this.t % 3600)/60);
         var secondes = this.t % 3600 % 60;

         $('h1').html(this.addZero(heures) + ':' + this.addZero(minutes) + ':' + this.addZero(secondes));
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
      this.t = (inputHour * 3600) + (inputMinute * 60) + inputSecond;
      this.go();
   },
   stop: function(){
      this.count++;
      this.count % 2 === 0
      clearInterval(this.intervalID);
   },
   reset: function(){
      clearInterval(this.intervalID);
      $('h1').html('00:25:00');
      this.t = 1500;
   },
}

app.init();

});