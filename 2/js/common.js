$(document).ready(function(){
    // fixed된 박스들 열고 닫기
    $(".gnb_btn, .gnb_cls").on("click", function(){
        $(".gnb_fr").fadeToggle(400);
    });
    $(".search_btn").on("click", function(){
        $(".src_frm_fr").fadeIn(400);
        $(".src_tit").fadeIn(2000).delay(1000);
    });
    $(".src_cls").on("click", function(){
        $(".src_frm_fr").fadeOut(400);
        $(".src_tit").css("display", "none");
    });
    $(".signin_btn, .signin_cls").on("click", function(){
        $(".gnb_fr .signin_frm_fr.mo").fadeToggle(400);
    });
    $(".signup_btn, .signup_cls").on("click", function(){
        $(".gnb_fr .signup_frm_fr.mo").fadeToggle(400);
    });

    var sc_top = $(window).scrollTop();
    var ht = parseInt($(this).height());
    if(sc_top>ht){
        $(".top .logo").animate({"background-image":"url(../src/logo2_sm.png)"}, 700);
        $(".top .lng_en").animate({"background-color":"#ddd"}, 700);
        $(".top .btn_box label").animate({"color":"black"}, 700);
    } else {
        $(".top .logo").animate({"background-image":"url(../src/logo1_sm.png)"}, 700);
        $(".top .lng_en").animate({"background-color":"rgba(255, 255, 255, 0.8)"}, 700);
        $(".top .btn_box label").animate({"color":"white"}, 700);
    }

    $(".right_btn").on("click", function(){
        $(".news_box").not(":animated").animate({"margin-left":"-80vw"}, 1000);
        $(".right_btn").fadeOut();
        $(".left_btn").fadeIn();

    });
    $(".left_btn").on("click", function(){
        $(".news_box").not(":animated").animate({"margin-left":"0vw"}, 1000);
        $(".left_btn").fadeOut();
        $(".right_btn").fadeIn();
    });
});