$("#keyButton").click(function(){
  $("#keyboard").toggleClass("display");
  $("#keyboard2").toggleClass("display");
    $("#drums").removeClass("display");
});

$("#drumButton").click(function(){
  $("#drums").toggleClass("display");
  $("#keyboard").removeClass("display");
  $("#keyboard2").removeClass("display");
});
