$(document).ready(function(){

  // funzione per invio mess
  function inviaMess() {
    var messaggio = $(".message").val();

    var elmentmsg = $("#template .msgsent").clone();

    elmentmsg.find(".testo").text(messaggio);

    $("#now_chat").append(elmentmsg);

    $(".message").val("");
  }
  
  // invio mess
  $(".sendmsg").click(function(){
    inviaMess();
  });

  // inviomsg con invio - "13"
  $(".message").on('keypress',function(e) {
    if(e.which == 13) {
      inviaMess();
    }
  });

  // al click e al passaggio la chat cambia colore
  $(".chat").on({
    click: function() {
      $(this).addClass("grey");
      $(this).siblings().removeClass("grey");
    },
    mouseover: function(){
      $(this).not(".grey").addClass("lightgrey");
      $(this).siblings().removeClass("lightgrey");
    }
  });

  // input find da modificare al click



});
