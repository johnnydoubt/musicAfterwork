$("#keyButton").click(function(){
  $("#keyboard").addClass("display");
  $("#keyboard2").addClass("display");
    $("#drums").removeClass("display");
});

$("#drumButton").click(function(){
  $("#drums").addClass("display");
  $("#keyboard").removeClass("display");
  $("#keyboard2").removeClass("display");
});
