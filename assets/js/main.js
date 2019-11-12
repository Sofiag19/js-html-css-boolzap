$(document).ready(function(){

  $(".sendmsg").click(function(){

  var messaggio = $(".message").val();

  var elmentmsg = $("#template .msgsent").clone();

  elmentmsg.find(".testo").text(messaggio);

  $("#now_chat").append(elmentmsg);

  $(".message").val("");


  $("#user_chat input").
  // on focus

  $(".chat").click(function(){
    
    $(this).css("background-color", rgb(248, 248, 248));
    $(this).siblings(".chat").css("background-color", white);

  })




});
});
