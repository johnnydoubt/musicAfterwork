
let score=0;
let chain=0;

let scoreplus = function(){
  if(chain<10){
    score += 1;
  }
  else if (10<=chain<20) {
    score+=2;
    $("#combo").html("2");
  }
  else if (20<=chain<30) {
    score+=3;
    $("#combo").html("3");
  }
  else if (30<=chain) {
    score+=4;
    $("#combo").html("4");
  }
}




document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65 && at === true) {
        console.log('a was pressed at the good time');
        scoreplus();
        $("#score").html(score);
        chain++;
        at = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 65 && at=== false){
      console.log('a was pressed at the wrong time');
      chain=0;
      $("#combo").html("1");
    }


    else if(event.keyCode == 90 && zt === true) {
        console.log('z was pressed at the good time');
        scoreplus();
        $("#score").html(score);
        chain++;
        zt = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 90 && zt=== false){
      console.log('z was pressed at the wrong time');
      chain=0;
      $("#combo").html("1");
    }


    else if(event.keyCode == 69 && et === true) {
        console.log('e was pressed at the good time');
        scoreplus();
        $("#score").html(score);
        chain++;
        et = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 69 && et=== false){
      console.log('e was pressed at the wrong time');
      chain=0;
      $("#combo").html("1");
    }


    else if(event.keyCode == 82 && rt === true) {
        console.log('r was pressed at the good time');
        scoreplus();
        $("#score").html(score);
        chain++;
        rt = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 82 && rt=== false){
      console.log('r was pressed at the wrong time');
      chain=0;
      $("#combo").html("1");
    }

  });
