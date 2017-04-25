  let score=0;
  document.addEventListener('keydown', function(event) {

  switch (true) {
    case event.keyCode == 65 && at === true:
    score++;
    at = false;
    console.log('le score est de :'+score);
      break;
    case event.keyCode == 90 && zt === true:
    console.log('z was pressed at the good time');
    score++;
    zt = false;
      break;
    case event.keyCode == 69 && et === true:
    console.log('e was pressed at the good time');
    score++;
    et = false;
    console.log('le score est de :'+score);
      break;
    case event.keyCode == 82 && rt === true:
    console.log('r was pressed at the good time');
    score++;
    rt = false;
    console.log('le score est de :'+score);
      break;
    }})
