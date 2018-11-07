window.onload = function() {
  var puzzlearea = $('#puzzlearea');
  var c = puzzlearea.children();
  var x = 0; // horizantal position
  var y = 0; // vertical position
  var count = 0;
  var blank = ["300px","300px"];
  var blankInt = [parseInt(blank[0]),parseInt(blank[1])];
  var shufflebutton = document.getElementById("shufflebutton");
  var N = 15;

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


  for(let i=0;i<c.length;i++){
      c[i].onclick = function (){
      if (isMovable(c[i])){
      let positionTop = c[i].style.top;
      let positionLeft = c[i].style.left;

      c[i].style.top = blank[0];
      c[i].style.left = blank[1];

      blank[0] = positionTop;
      blankInt[0] = parseInt(blank[0]);
      blank[1] = positionLeft;
      blankInt[1] = parseInt(blank[1]);
    }

    };// end of move function
  }// end of for loop


  function getCoor(piece){
    return [parseInt(piece.style.top),parseInt(piece.style.left)];
  }
  console.log(isMovable(c[14]));



  function isMovable(piece){
    let a = getCoor(piece);
  if (a[0]+100 == blankInt[0] && a[1] == blankInt[1] || a[0]-100 == blankInt[0] && a[1] == blankInt[1]  || a[0] == blankInt[0] && a[1]-100 == blankInt[1] || a[0] == blankInt[0] && a[1]+100 == blankInt[1] ){
    return true;
  }
  else{
    return false;
  }
  }

  for (var a = 0; a < c.length; a++){
    if(isMovable(c[a])==true){
    $(c[a]).first().addClass("movablepiece");// adding movablepiece function;
  }// end of if statement
  c[a].onmouseleave = function(){
    $(c[a]).first().remove("movablepiece");
    console.log("LEFT");
}
}// end of for loop for highlighting pieces
  shufflebutton.onclick = function(){
    for(let i=0;i<300; i++){
        var number = Math.floor(Math.random()*16);
        let positionTop = c[number].style.top;
        let positionLeft = c[number].style.left;

        c[number].style.top = blank[0];
        c[number].style.left = blank[1];

        blank[0] = positionTop;
        blankInt[0] = parseInt(blank[0]);
        blank[1] = positionLeft;
        blankInt[1] = parseInt(blank[1]);

      }// end of move function
    }// end of for loopS
}// End of main function


//window.onload = square();
