let at = false;
let zt = false;
let et = false;
let rt = false;
let setTrue = function(touch){
  if(touch ==="a"){
    console.log('a is playable')
    at=true;
    setTimeout(function(){at=false;console.log('a is not playable anymore')},800);
  }
  else if (touch ==="z"){
console.log('z is playable')
    zt=true;
    setTimeout(function(){zt=false;console.log('z is not playable anymore')},500);
  }
  else if (touch ==="e"){
    console.log('e is  playable')
    et=true;
    setTimeout(function(){at=false;console.log('e is not playable anymore')},500);
  }
  else if(touch ==="r"){
    console.log('r is playable ')
    rt=true;
    setTimeout(function(){at=false;console.log('r is not playable anymore')},500);
  }
}

let readyNotes = function(note, timer){
  console.log(note+' will be ready in '+(timer/1000)+'s');
    setTimeout(function(){setTrue(note)},timer);
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65 && at === true) {
        console.log('a was pressed at the good time');
    }
    else if(event.keyCode == 65 && at=== false){
      console.log('a was pressed at the wrong time');
    }
});

readyNotes('a', 1000);
readyNotes('e', 5000);
readyNotes('r', 8000);
readyNotes('z', 13000);
