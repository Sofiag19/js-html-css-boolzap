$(document).ready(function(){

  // invio mess
  $(".sendmsg").click(function(){

    var messaggio = $(".message").val();

    var elmentmsg = $("#template .msgsent").clone();

    elmentmsg.find(".testo").text(messaggio);

    $("#now_chat").append(elmentmsg);

    $(".message").val("");

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
  //

  // inviomsg con invio - "13"
  $(".message").on('keypress',function(e) {
    if(e.which == 13) {
      var messaggio = $(".message").val();

      var elmentmsg = $("#template .msgsent").clone();

      elmentmsg.find(".testo").text(messaggio);

      $("#now_chat").append(elmentmsg);

      $(".message").val("");
    }
});


});
