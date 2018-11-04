window.onload = function() {
  var puzzlearea = $('#puzzlearea');
  var c = puzzlearea.children();
  var x = 0; // horizantal position
  var y = 0; // vertical position
  var count = 0;

  for (var i = 0; i<c.length; i++){

      $(c[i]).first().addClass("puzzlepiece");
      c[i].style.backgorundSize = "400px 400px";
      c[i].style.left = x + "px";
      c[i].style.top = y + "px"

      x+=100;
      count+= 1;
  if (count%4 == 0){
    y += 100;
    x=0;
  }// end of if statement

  }// end of arrange rows for loop
  x=0; //horizontal position reset
   y=0; // vertical position reset
   count=0;// counter reset
     for(var t=0;t<c.length;t++){
     //function to set the position of the image
       xaxis=x+"px";
  	 yaxis=y+"px";
       value= xaxis+ " "+ yaxis;
  	 console.log(value);
  	 c[t].style.backgroundPosition= value ;
        x=x-100;
  	  count=count + 1;
  	  if (count % 4 == 0){
  		  x=0;
  		  y=y-100;
  	  }
    }// end of for loop to position Background

    c.onmouserover = function(){for(){

    }// end of for loop to highlight numbers
  }// end of mouseover function


}// End of main function

//window.onload = square();
