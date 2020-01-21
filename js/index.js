$(document).ready(function(){
    /* 1page scroll */

    $(".page").each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(".page").eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                    }catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                    }catch(e){}
                }
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    });

    /* 1page scroll END */
    
    /* 스크롤 시 page별 on클래스 부여 */

    var winH = parseInt($(window).height());
    $(window).scroll(function(){
        var cnt = parseInt($(this).scrollTop() / winH);
        $(".page").eq(cnt).siblings().find(".page_cover").fadeOut(500);
        if( cnt >= 1 ){
            $(".home_btn").css("display","block");
            $("#gnb .menu").addClass("on");
            $("#gnb .menu li").removeClass("on");
            $("#gnb .menu li").eq(cnt).addClass("on");
            $(".page").eq(cnt).find(".page_cover").fadeIn(500);
            
        } else {
            $(".home_btn").fadeOut();
            $("#gnb .menu").removeClass("on");
            $("#gnb .menu li").removeClass("on");
        }
        /* #page2 */
        if( cnt == 1 ){
            $("#page2").find("*").addClass("on");
        } else {
            $("#page2").find("*").removeClass("on");
        } // removeClass가 안되는 이유?

        if( cnt == 2){
            $(".circle_box").addClass("on");
        } else {
            $(".circle_box").removeClass("on");
        } // circle은 둘다 안먹히는 중
    });

    /* 스크롤 시 page별 on클래스 부여 END */

    /* 메뉴클릭시 위치로 스크롤 이동 */

    $("#gnb .menu li").on("click", function(e){
        e.preventDefault();
        $(this).addClass("on").siblings().removeClass("on");
        var idx = $(this).index();
        var p_idx = $(".page").eq(idx);
        var p_distance = p_idx.offset().top;
        $("html, body").stop().animate({scrollTop : p_distance}, 1000);
    });

    /* 메뉴클릭시 위치로 스크롤 끝*/

    /* page2 사진 */

    $(".pic").on("click", function(){
        $(this).addClass("vsb");
        $(this).siblings().removeClass("vsb");
    });

    /* page2 사진 end */


    /* page3 상하 슬라이더 */
    function downAni(){
        $(".sl_box").not(":animated").animate({"margin-top": "-100vh"}, 1000, function(){
            $(".sl_box li").eq(0).appendTo(".sl_box");
            $(".sl_box").css("margin-top", "0");
            $(".sl_box li").eq(0).find(".sl_tit_box, .sl_con").addClass("on");
            $(".sl_box li").eq(0).siblings().find(".sl_tit_box, .sl_con").removeClass("on");
        });
    }
    function upAni(){
        var len = $(".sl_box li").length;
        $(".sl_box li").eq(len-1).prependTo(".sl_box");
        $(".sl_box").css("margin-top", "-100vh");
        $(".sl_box").not(":animated").animate({"margin-top" : "0"}, 1000, function(){
            $(".sl_box li").eq(0).find(".sl_tit_box, .sl_con").addClass("on");
            $(".sl_box li").eq(0).siblings().find(".sl_tit_box, .sl_con").removeClass("on");
        });
    
    }
    $(".sl_up_btn").on("click", function(){
        upAni();
    });
    $(".sl_down_btn").on("click", function(){
        downAni();
    });
    /* 상하 슬라이더 끝 */
});