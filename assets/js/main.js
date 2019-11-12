$(document).ready(function(){

  // invio mess
  $(".sendmsg").click(function(){

    var messaggio = $(".message").val();

    var elmentmsg = $("#template .msgsent").clone();

    elmentmsg.find(".testo").text(messaggio);

    $("#now_chat").append(elmentmsg);

    $(".message").val("");

  });

  // al click il div cambia colore
  $(".chat").click(function(){
    $(this).addClass("grey");
    $(this).siblings().removeClass("grey");
  })

  // inviomsg con invio


});
