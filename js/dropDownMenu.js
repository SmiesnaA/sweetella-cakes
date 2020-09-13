$(document).ready(function(){
    $(".dropdown-menu").attr("display", "none");
    $("#menu i").attr("class", "fas fa-bars");
      $(document).ready(function(){
        $("#menu").click(function(){
            if($(".dropdown-menu").hasClass("down")) {
                $(".dropdown-menu", this).slideUp(200);
                $(".dropdown-menu").removeClass("down");
                $("#menu i").attr("class", "fas fa-bars");
            }
            else {
                $(".dropdown-menu", this).slideDown(200);
                $(".dropdown-menu").addClass("down");
                $("#menu i").attr("class", "fas fa-times");
            }
         
        });
      })

      $(".dropdown-menu").attr("display", "none");
      $("#menuMobile i").attr("class", "fas fa-bars");
        $(document).ready(function(){
          $("#menuMobile").click(function(){
              if($(".dropdown-menu").hasClass("down")) {
                  $(".dropdown-menu", this).slideUp(200);
                  $(".dropdown-menu").removeClass("down");
                  $("#menuMobile i").attr("class", "fas fa-bars");
              }
              else {
                  $(".dropdown-menu", this).slideDown(200);
                  $(".dropdown-menu").addClass("down");
                  $("#menuMobile i").attr("class", "fas fa-times");
              }
           
          });
        })
});
