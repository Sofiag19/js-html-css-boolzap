$(document).ready(function(){

  // funzione per invio mess e risposta
  function inviaMess() {

    var messaggio = $(".message").val();

    if (messaggio) {
      // var elmentmsg = $("#template .msgsent").clone();
      // elmentmsg.find(".testo").text(messaggio);
      var copiaTemplSend = $("#hd-template_sent").html();
      var templReadySend = Handlebars.compile(copiaTemplSend);
      var createObjSend = {text : messaggio};
      var createElSend = templReadySend(createObjSend);
      var where = $(".now_chat.play");
      where.append(createElSend);
    }
    $(".message").val("");

    setTimeout(function(){
      // var ricevuto = $("#template .msgreceived").clone();
      // ricevuto.find(".testo").text("ok");
      var copiaTemplRic = $("#hd-template_received").html();
      var templReadyRic = Handlebars.compile(copiaTemplRic);
      var createObjRic = {text : "ok"};
      var createElRic = templReadyRic(createObjRic);
      where.append(createElRic);
    }, 1000);

  }


  $(".chat").on({
    // al click la chat cambia colore
    click: function() {
      $(this).addClass("grey");
      $(this).siblings().removeClass("grey");
      $(".chat").removeClass("play");
      $(this).addClass("play");
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
    // controllo che se apro un mini drop gli altri si devono chiudere
    $(".mini_drop").hide();
    $(this).siblings(".mini_drop").toggle();
  });

  $(".now_chat").on("click",".canc_mess",function() {
    $(this).parents(".icona").hide();
  });



}); //chiusura document ready
