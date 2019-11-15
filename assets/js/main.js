$(document).ready(function(){

  // funzione per invio mess e risposta
  function inviaMess() {

    var messaggio = $(".message").val();

    if (messaggio) {
      var elmentmsg = $("#template .msgsent").clone();
      elmentmsg.find(".testo").text(messaggio);
      var where = $(".now_chat.play");
      where.append(elmentmsg);
      where.scrollTop(10000);
    }
    $(".message").val("");

    setTimeout(function(){
      var ricevuto = $("#template .msgreceived").clone();
      ricevuto.find(".testo").text("ok");
      where.append(ricevuto);
      where.scrollTop(10000);
    }, 1000);
  }


  $(".chat").on({
    // al click la chat cambia colore
    click: function() {
      $(this).addClass("grey");
      $(this).siblings().removeClass("grey");

      // al click di un contatto di apre la relativa chat
      // modifica img contatto
      var indirizzoImg = $(this).find(".contact_img").attr("src");
      var stileImg = $(this).find(".contact_img").attr("style");
      $(".image").attr("src", indirizzoImg).attr("style",stileImg);
      // modifica nome
      var nomeContatto = $(this).find(".name").text();
      $(".name_now_contact").text(nomeContatto);
      // cambio chat
      var numChat = $(this).attr("num-chat");
        $(".now_chat").each(function(){
          var numChatWrite = $(this).attr("num-chat");
          if (numChat == numChatWrite) {
            $(this).addClass("play");
          } else {
            $(this).removeClass("play");
          }
        })
    },

    // al passaggio del mouse la chat cambia colore
    mouseover: function(){
      $(this).not(".grey").addClass("lightgrey");
      $(this).siblings().removeClass("lightgrey");
    }
  });

  // invio mess con tasto
  $(".sendmsg").click(function(){
    inviaMess();
  });

  // inviomsg con invio ("13")
  $(".message").on('keypress',function(e) {
    if(e.which == 13) {
      inviaMess();
    }
  });


  // ricerca in chats
  $('#cerca').keyup(function(){
    var ricerca = $(this).val().toLowerCase();
    $('.name').each(function(){
      var nome = $(this).text().toLowerCase();
      if (nome.includes(ricerca)) {
        $(this).parents(".chat").show();
      } else {
        $(this).parents(".chat").hide();
      }
    });
    if (ricerca == "") {
      $(".chat").show();
    }
  });

  // al click su un messaggio si apre un minidropdown
  $(".now_chat").on("click",".arrow", function(){
      $(this).siblings(".mini_drop").toggle();
  });

  $(".now_chat").on("click",".canc_mess",function() {
    $(this).parents(".icona").hide();
  });

  // TODO:  modifica input ricerca
  // TODO:  modifica input Messaggio
  // TODO:  controllo che se apro un mini drop gli altri si devono chiudere
  // TODO: orario


}); //chiusura document ready
