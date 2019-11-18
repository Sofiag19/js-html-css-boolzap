$(document).ready(function(){

  // funzione per invio mess e risposta
  function inviaMess() {

    var messaggio = $(".message").val();

    if (messaggio) {
      // var elmentmsg = $("#template .msgsent").clone();
      // elmentmsg.find(".testo").text(messaggio);
      var copiaTemplSend = $("#hd-template_sent").html();
      var templReadySend = Handlebars.compile(copiaTemplSend);
      var createObjSend = {text : messaggio, timemsg : this_time()};
      var createElSend = templReadySend(createObjSend);
      var where = $(".now_chat.play");
      where.append(createElSend);
      // scroll pagina
      where.scrollTop(10000);
    }
    $(".message").val("");

    var online = setTimeout(function(){
      $(".last_access").text("online");
    }, 200);
    // clearTimeout(online);
    var staScrivendo = setInterval(function(){
      $(".last_access").text("Sta scrivendo...");
    }, 600);
    clearTimeout(staScrivendo);
    setTimeout(function(){
      // var ricevuto = $("#template .msgreceived").clone();
      // ricevuto.find(".testo").text("ok");
      var copiaTemplRic = $("#hd-template_received").html();
      var templReadyRic = Handlebars.compile(copiaTemplRic);
      var createObjRic = {text : "ok", timemsg : this_time()};
      var createElRic = templReadyRic(createObjRic);
      where.append(createElRic);
      // scroll pagina
      where.scrollTop(10000);
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
    // controllo che se apro un mini drop gli altri si devono chiudere
    $(".mini_drop").hide();
    $(this).siblings(".mini_drop").toggle();
  });

  $(".now_chat").on("click",".canc_mess",function() {
    $(this).parents(".icona").hide();
  });

  // modifica input ricerca
  $("#cerca").click(function(){
    $(this).removeAttr("placeholder");
    $("#lente").hide();
    $("#return").show();
  })

  $("#return").click(function(){
    $(this).hide();
    $("#lente").show();
    $("#cerca").attr("placeholder","Cerca o inizia una nuova chat");
  })

  // modifica input Messaggio
  $("#writing").keyup(function(){
    var valWriting = $(this).val();
    var lunghWriting = valWriting.length;
    console.log(lunghWriting);
    if (lunghWriting == 0) {
      $("#writing").attr("placeholder","Scrivi un messaggio");
      $("#mexvocale").show();
      $("#invia").hide();
    } else if (lunghWriting > 0) {
      $("#writing").removeAttr("placeholder");
      $("#mexvocale").hide();
      $("#invia").show();
    }
  })

  // TODO: mess sta scrivendo

  // TODO: orario
  function this_time() {
   var d = new Date();
   var m = d.getMinutes();
   var h = d.getHours();

   if (m < 10) {
     m = "0" + m;
   };
   if (h < 10) {
     h = "0" + h;
   }
   return h + ":" + m;
  };

  // aggiornare chat con ultimo mess e orario

}); //chiusura document ready
