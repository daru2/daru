$(document).ready(function(){
    $("#menu_btn").on("click", function(){
        $(this).fadeOut(300);
        // fadeOut이 아니라 사라지는 이유?
        $("#menu_box").animate({ "left" : "0"}, 300);
    });
    $("#menu_cls").on("click", function(){
        $("#menu_box").animate({ "left" : "-150vw"}, 300);
        $("#menu_btn").fadeIn(300);
    });

    if(parseInt($(window).width()) <= 700 ){
        $(".contact_box i").css("font-size", "30px");
    }
});