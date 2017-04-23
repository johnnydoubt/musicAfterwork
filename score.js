let score=0;

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65 && at === true) {
        console.log('a was pressed at the good time');
        score++;
        at = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 65 && at=== false){
      console.log('a was pressed at the wrong time');
    }});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 90 && zt === true) {
        console.log('a was pressed at the good time');
        score++;
        zt = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 90 && zt=== false){
      console.log('a was pressed at the wrong time');
    }});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 69 && et === true) {
        console.log('a was pressed at the good time');
        score++;
        et = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 69 && et=== false){
      console.log('a was pressed at the wrong time');
    }});

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 82 && rt === true) {
        console.log('a was pressed at the good time');
        score++;
        rt = false;
        console.log('le score est de :'+score);
    }
    else if(event.keyCode == 82 && rt=== false){
      console.log('a was pressed at the wrong time');
    }
});
