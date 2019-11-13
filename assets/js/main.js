$(document).ready(function(){

  // funzione per invio mess e risposta
  function inviaMess() {
    var messaggio = $(".message").val();
    console.log(messaggio);
    var elmentmsg = $("#template .msgsent").clone();
    elmentmsg.find(".testo").text(messaggio);
    $("#now_chat").append(elmentmsg);
    $(".message").val("");

    // sullo step 1 sarà fondamentalmente la stessa logica usata per creare il msg utente, ma il blocco avrà caratteristiche grafiche diverse e verrà fuori solo dopo 1secondo che è uscito il messaggio utente(quello verde);
    setTimeout(function(){
      var ricevuto = $("#template .msgreceived").clone();
      ricevuto.find(".testo").text("ok");
      $("#now_chat").append(ricevuto);
    }, 1000);
  }

  // invio mess
  $(".sendmsg").click(function(){
    inviaMess();
  });

  // sullo step 2 si tratterà di gestire una funzione di callback, scatenata da evento di digitazione da tastiera sul input di ricerca. Da li dovrò fare un check su ogni singolo nome contenuto su ogni singolo blocco di contatto, quindi un ciclo su tutti i blocchi contatto presenti in pagina (e qui quindi mi servirà l’“each()“), e per il check essendo su stringhe, mi ricordo che alcuni metodi js che erano per gli array, son presenti anche per le stringhe, come per es. l’“includes()“.

    $('#cerca').keyup(function(){
      var ricerca = $(this).val().toLowerCase();
        $('.name').each(function(){
          var nome = $(this).text().toLowerCase();
          if (!nome.indexOf(ricerca)) {
            $(this).parents(".chat").show();
          } else {
            $(this).parents(".chat").hide();
          }
        });
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





  // scompare placeholder da input mess
  // $("#writing").click(function(){
  //   $(this).removeAttr("placeholder");
  // })

  // ricerca chat: scompare placeholder, lente e compare freccina
  // $("#find_chat div").click(function(){
  //   $(this).children("#cerca").removeAttr("placeholder");
  //   $(this).children("#lente").hide();
  //   $(this).children("#return").show();
  // })

  // ricerca chat: ricompare placeholder, lente e scompare freccina
  // $("#return").click(function(){
  //   $(this).hide();
  //   $(this).siblings("#cerca").attr("placeholder","Cerca o inizia una nuova chat");
  //   $(this).siblings("#lente").show();
  // })

  // -=====modificare send con mex vocale=========
  // if(input value == 0) {
  //   $(send).hide();
  // } else {
  //   $(mexvocale).hide()
  // }
    // $("#writing").click(function(){
    //   var valueWriting = $("#writing:text").attr("text");
    //   if (valueWriting > 0) {
    //     $("#invia").show();
    //     $("#mexvocale").hide();
    //   }
    // })

  // hover su msgsent e msgreceived appare freccina
  // $(msgsent).hover(function(){
  //   $(freccina).show();
  // })
  // $(msgreceived).hover(function(){
  //   $(freccina).show();
  // })

});
