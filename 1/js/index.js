$(document).ready(function(){
    function nextAni(){
        $(".sl_box1").not(":animated").animate({"margin-left" : "-100%"}, 1000, function(){
            $(".sl_box1 li").eq(0).appendTo($(".sl_box1"));
            $(".sl_box1").css("margin-left", "0");
            $(".btn_box1 button").eq(0).appendTo(".btn_box1");
            $(".btn_box1 button").eq(0).addClass("on");
            $(".btn_box1 button").eq(0).siblings().removeClass("on");
        });
    }
    
    var intv = setInterval( function(){ nextAni() }, 3000);



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
        intv = setInterval( function(){ nextAni(); }, 3000);
    });
});