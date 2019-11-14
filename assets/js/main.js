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
    // scrolltop
    $(".message").val("");

    setTimeout(function(){
      var ricevuto = $("#template .msgreceived").clone();
      ricevuto.find(".testo").text("ok");
      where.append(ricevuto);
      where.scrollTop(10000);
    }, 1000);
  }


  // al click e al passaggio la chat cambia colore e al click seleziono la chat che voglio
  $(".chat").on({
    click: function() {
      $(this).addClass("grey");
      $(this).siblings().removeClass("grey");
      // al click di un contatto di apre la relativa chat
      var nomeContatto = $(this).find(".name").text().toLowerCase();
      console.log(nomeContatto);
      $(".contact_now h2").each(function(){
        var nomeChat = $(this).text().toLowerCase();
        console.log(nomeChat);
        if (nomeChat == nomeContatto) {
          $(this).parents(".chat_showed").show();
          $(".now_chat").addClass("play");
        } else {
          $(this).parents(".chat_showed").hide();
          $(".now_chat").removeClass("play");
        }
      })
    },

    mouseover: function(){
      $(this).not(".grey").addClass("lightgrey");
      $(this).siblings().removeClass("lightgrey");
    }
  });


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


  // ricerca chat
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


}); //chiusura document ready
