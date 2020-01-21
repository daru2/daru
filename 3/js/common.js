$(document).ready(function(){
    $(".src_frm_btn").on("click", function(){
        $("#src_frm_mo").fadeIn(400).css("display", "flex");
    });
    $(".src_frm_cls_mo").on("click", function(){
        $("#src_frm_mo").fadeOut(400); // 안먹히는 페이드 아웃
    });

    $(".menu_frm_btn").on("click", function(){
        $("#menu_frm_mo").fadeIn(400).css("display", "flex");
    });
    $(".menu_frm_cls_mo").on("click", function(){
        $("#menu_frm_mo").fadeOut(400);
    });

});