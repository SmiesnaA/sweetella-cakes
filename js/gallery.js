$(document).ready(function(){
    $(".photos").each(function(index) {
        $(this).attr('id', 'img' + (index + 1));
    });

    $(".photos").each(function() {
        $("#photoNav").append('<div class="circle"></div>');
    });

    $(".circle").each(function(index) {
        $(this).attr('id', 'circle' + (index + 1));
    });

    $(".photos").click(function() {
        if(!($(this).hasClass('opened'))) {
            $(".photos").fadeIn("fast");
            $(".photos").removeClass("opened");
            $(this).addClass('opened');
            $(this).find(".stack").fadeOut();
            $(".circle").removeClass('activeNav');
            var i = $(this).attr("id").replace("img", "");
            $("#circle" + i).addClass('activeNav');
        }
        else {
            $(this).removeClass('opened');
            $(this).find(".stack").fadeOut();
        }
    });

});