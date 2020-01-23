$(document).ready(function(){

    $("#page1").find(".page_cover").fadeIn(500);
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
                duration: 500, complete: function () {
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
            $("#gnb .menu").addClass("on");
            $("#gnb .menu li").removeClass("on");
            $("#gnb .menu li").eq(cnt).addClass("on");
            $(".page").eq(cnt).find(".page_cover").fadeIn(500);
            
        } else {
            $("#gnb .menu").removeClass("on");
            $("#gnb .menu li").removeClass("on");
        }
        if ( cnt == 0){
            $("#page1").find(".page_cover").fadeIn(500);
            $(".home_btn").addClass("on");
        } else {
            $(".home_btn").removeClass("on");
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
        $("html, body").stop().animate({scrollTop : p_distance}, 500);
    });

    $("#gnb .home_btn").on("click", function(e){
        e.preventDefault();
        $(this).addClass("on");
        $("#gnb .menu li").removeClass("on");
        $("html, body").stop().animate({scrollTop : 0}, 500);

    })

    /* 메뉴클릭시 위치로 스크롤 끝*/

    /* page2 사진 */

    $(".pic").on("click", function(){
        $(this).addClass("vsb");
        $(this).siblings().removeClass("vsb");
    });

    /* page2 사진 end */


    /* page3 상하 슬라이더 */
    // function nextAni(){

    //     $(".sl_box li").eq(0).not(":animated").fadeOut(500, function(){
    //         $(".sl_box li").eq(0).appendTo(".sl_box");
    //         $(".sl_box li").eq(0).fadeIn(500);
    //         $(".sl_box li").eq(0).find(".sl_tit_box, .sl_con").addClass("on");
    //         $(".sl_box li").eq(0).siblings().find(".sl_tit_box, .sl_con").removeClass("on");
    //     });

    // }
    // function prevAni(){
    //     var len = $(".sl_box li").length;
    //     $(".sl_box li").eq(0).not(":animated").fadeOut(500, function(){
    //         $(".sl_box li").eq(len-1).prependTo(".sl_box");
    //         $(".sl_box li").eq(0).fadeIn(500);
    //         $(".sl_box li").eq(0).find(".sl_tit_box, .sl_con").addClass("on");
    //         $(".sl_box li").eq(0).siblings().find(".sl_tit_box, .sl_con").removeClass("on");
    //     });
        
    // }
    // $(".sl_prev_btn").on("click", function(){
    //     prevAni();
    // });
    // $(".sl_next_btn").on("click", function(){
    //     nextAni();
    // });
    /* 상하 슬라이더 끝 */

    /* page3 슬라이더 on클래스 부여 */

    $(".slide__more__btn").on("click", function(){
        $(this).toggleClass("on");
        $(".slide__more__con").toggleClass("on");
    });

    $(".boxnav button").on("click", function(){
        $(".slide__more__btn").removeClass("on");
        $(".slide__more__con").removeClass("on");
    });


    /* page3 슬라이더 end */


});