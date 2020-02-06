$(document).ready(function(){

    // 1st slider
    function nextAni1(){
        $(".slider1").not(":animated").animate({"margin-top":"-90vh"}, 500, function(){
            $(".slider1 li").eq(0).appendTo($(".slider1"));
            $(".slider1").css("margin-top", "0");
            $(".button_fr button").eq(0).appendTo($(".button_fr"));
            $(".button_fr button").eq(0).addClass("on").siblings().removeClass("on");
        });
    };
    var intv1 = setInterval( function(){ nextAni1() }, 4000);

    $(".button_fr button").click(function(){
        clearInterval(intv1);
        var idx = $(this).index();
        if(idx != 0){
            for(var i = 0; i < idx-1; i++){
                $(".slider1 li").eq(i).appendTo($(".slider1"));
                $(".button_fr button").eq(i).appendTo($(".button_fr"));
                $(".button_fr button").eq(0).addClass("on").siblings().removeClass("on");
            }
        }
        nextAni1();
        intv1 = setInterval( function(){ nextAni1(); }, 4000);
    });

    // 1st slider end



    // 2nd slider

    function nextAni2(){
        $(".slider2 li").eq(1).fadeIn(200);
        $(".slider2 li").eq(0).fadeOut(200);
        setTimeout(function(){
            
            $(".slider2 li").eq(0).appendTo($(".slider2"));
        }, 300);
    }
    function prevAni2(){
        var len = $(".slider2 li").length - 1;
        $(".slider2 li").eq(len).fadeIn(200);
        $(".slider2 li").eq(0).fadeOut(200);
        setTimeout(function(){
            $(".slider2 li").eq(len).prependTo($(".slider2"));
        }, 300);
    }
    
    $(".slider2 li").eq(0).fadeIn(200);
    var intv2 = setInterval( function(){ nextAni2() }, 3000);

    $(".sec3_next_btn").on("click", function(){
        clearInterval(intv2);
        nextAni2();
        intv2;
    });

    $(".sec3_prev_btn").on("click", function(){
        clearInterval(intv2);
        prevAni2();
        intv2;
    });

    // 2nd slider end

    // scroll 위치마다 이팩트
    if(parseInt($(window).width()) > 1280){
        $("body").scroll(function(){
            console.log($(this).scrollTop());
            var sct = parseInt($(this).scrollTop());
            var winH = $(window).height();
            if(sct >= winH){
                $(".hd").css("position", "fixed");
            } else {
                $(".hd").css("position", "relative");
            }
        });
    }




    // $(".gnb .menu li").on("mouseout", function(){
    //     $(".sub > li").removeClass("on");
    // });
});