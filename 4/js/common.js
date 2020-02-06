$(document).ready(function(){
    $(".mo_sc_btn, .mo_sc_cls").on("click", function(){
        $(".mo_sc_frm").fadeToggle(300);
    });
    $(".mo_gnb_btn, .mo_gnb_cls").on("click", function(){
        $(".mo_gnb").fadeToggle(300);
    });
    
    $(".gnb .menu li").on("mouseover", function(){
        var idx = $(this).index();
        // $(".sub > li").eq(idx).addClass("on").siblings().removeClass("on");
        $(".sub > li").eq(idx).slideDown(100).siblings().css("display", "none");
    });

    $(".vs1, .sec").on("mouseover", function(){
        // $(".sub > li").removeClass("on");
        $(".sub > li").slideUp(100)
    });

    // $(".sub a").on("mouseover", function(){
    //     $(this).addClass("on")
    // });
    // $(".sub a").on("mouseout", function(){
    //     $(this).removeClass("on")
    // });

});