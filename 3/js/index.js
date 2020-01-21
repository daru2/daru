$(document).ready(function(){

    // 다음 슬라이드 함수
    function nextAni(){
        $(".img_box").not(":animated").animate({"margin-left":"-100%"}, 800, function(){
            $(".img_box li").eq(0).appendTo(".img_box");
            $(".img_box").css("margin-left", "0");
            $(".img_btn_box button").eq(0).appendTo(".img_btn_box");
            $(".img_btn_box button").eq(0).addClass("on");
            $(".img_btn_box button").eq(0).siblings().removeClass("on");

        });
    }
    // 이전 슬라이드 함수
    function prevAni(){
        var len = $(".img_box li").length;
        $(".img_box li").eq(len-1).prependTo(".img_box");
        $(".img_box li").css("margin-left", "-100%");
        $(".img_box").not(":animated").animate({"margin-left":"0"}, 800);
    }

    // 슬라이드 인터발 설정
    var intv = setInterval( function(){ nextAni(); }, 3000 );

    // 슬라이드 바 버튼
    $(".img_btn_box button").click(function(){
        clearInterval(intv);
        var idx = $(this).index();
        if(idx != 0){
            for(var i=0; i<idx-1; i++){
                $(".img_box li").eq(i).appendTo($(".img_box"));
                $(".img_btn_box button").eq(i).appendTo($(".img_btn_box"));
            }
        }
        nextAni();
        intv = setInterval( function(){ nextAni(); }, 3000 );
    });

    // 분류 클릭시 페이드인 하며 순차적으로 컨텐츠 소환
    var txt = 0, dl = 0;
    $("#sec2 .btn").click(function(){
        var tar = parseInt($(this).attr("item"));
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $(".thum_lst li").css("display", "none");
        if(tar == "0" || tar == 0) {
            $(".thum_lst li").each(function(index){
                $(".thum_lst li").eq(index).delay(index*dl).fadeIn();
            });    
        } else { 
            $(".thum_lst li").css("display", "none");
            txt = ".item"+tar;
            if($(".thum_lst li").filter(txt).length<=12) {
                dl=250;
            } else {
                dl=0;
            }
            $(".thum_lst li").filter(txt).each(function(index){
                $(".thum_lst li").filter(txt).eq(index).delay(index*dl).fadeIn();
            });
            $(".thum_lst li").not(".item"+tar).css("display", "none");
        }    
    });

    function nextAni2(){
        $(".img_box2 li").not(":animated").eq(1).addClass("on");
        $(".img_com_box li").eq(0).appendTo($(".img_com_box"));
        $(".img_com_box li").not(":animated").eq(0).addClass("on");
        $(".img_com_box li").eq(0).siblings().removeClass("on");
        setTimeout( function(){
            $(".img_box2 li").eq(1).siblings().removeClass("on");
            $(".img_box2 li").eq(0).appendTo($(".img_box2"));
        }, 600);
    }

    function prevAni2(){
        var len2 = $(".img_box2 li").length;
        $(".img_box2 li").not(":animated").eq(len2-1).addClass("on");
        $(".img_com_box li").eq(len2-1).prependTo($(".img_com_box"));
        $(".img_com_box li").not(":animated").eq(0).addClass("on");
        $(".img_com_box li").eq(0).siblings().removeClass("on");
        setTimeout( function(){
            $(".img_box2 li").eq(len2-1).siblings().removeClass("on");
            $(".img_box2 li").eq(len2-1).prependTo($(".img_box2"));
        }, 600);
    }
    
    var intv2 = setInterval( function(){ nextAni2();}, 5000 );

    $("#left_btn").on("click", function(){
        clearInterval(intv2);
        prevAni2();
        intv2 = setInterval( function(){ nextAni2();}, 5000 );
    });

    $("#right_btn").on("click", function(){
        clearInterval(intv2);
        nextAni2();
        intv2 = setInterval( function(){ nextAni2();}, 5000 );
    })

    


    /*
    function ani(){
        $(".vs_box li").eq(1).addClass("on");
    };
        

    var intv2 = setInterval( function(){
        ani();
        setTimeout(function(){
            $(".vs_box li").eq(1).siblings().removeClass("on");
            $(".vs_box li".eq(0).appendTo($(".vs_box"));
        }, 셋타임아웃 시간);
    }, 인터발 시간);

    */

});