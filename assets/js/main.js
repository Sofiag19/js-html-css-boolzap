$(document).ready(function(){

  $(".sendmsg").click(function(){

  var messaggio = $(".message").val();

  var elmentmsg = $("#template .msgsent").clone();

  elmentmsg.find(".testo").text(messaggio);

  $("#now_chat").append(elmentmsg);

  $(".message").val("");


  $(".chat").click(function(){

    $(this).css("background-color", "grey");
    // $(this).siblings().css("background-color", "white");

  })

  // $("#user_chat .message").click(function(){
  //   $(this).blur();
  // });






});
});
