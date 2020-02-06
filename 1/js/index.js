
$(document).ready(function(){
        /* 1page scroll */
    if(parseInt($(window).width()) <= 1280 ){
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
                 
                // 화면 이동 0.5초(500)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, {
                    duration: 500, complete: function () {
                    }
                });
            });
        });
    }
        /* /1page scroll */

        /* cnt 설정 */



        // var winH = parseInt($(window).height());
        // $(window).scroll(function(){
        //     var cnt = parseInt($(this).scrollTop() / winH);
        //     console.log(cnt);
        //     if(cnt >= 1){
        //         $("#vdo").pause(); 
        //     }
        // });
        
        
        // 실패
        /* /cnt 설정 */

    function nextAni(){
        $(".sl_box1").not(":animated").animate({"margin-left" : "-100%"}, 500, function(){
            $(".sl_box1 li").eq(0).appendTo($(".sl_box1"));
            $(".sl_box1").css("margin-left", "0");
            $(".btn_box1 button").eq(0).appendTo(".btn_box1");
            $(".btn_box1 button").eq(0).addClass("on");
            $(".btn_box1 button").eq(0).siblings().removeClass("on");
        });
    }
    
    var intv = setInterval( function(){ nextAni() }, 4000);



    $(".btn_box1 button").click(function(){
        clearInterval(intv);
        var idx = $(this).index();
        if(idx != 0){
            for(var i=0; i<idx-1; i++){
                $(".sl_box1 li").eq(i).appendTo($(".sl_box1"));
                $(".btn_box1 button").eq(i).appendTo($(".btn_box1"));
            }
        }
        nextAni();
        intv = setInterval( function(){ nextAni(); }, 4000);
    });
});