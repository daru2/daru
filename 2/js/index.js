$(document).ready(function(){
    var p = $(".page");
    p.on("mousewheel DOMMouseScroll", function(e){ //페이지의 높이가 서로 다를 때
        var oe = e.originalEvent;
        var sc_top = $(window).scrollTop();
        var ht = parseInt($(this).height());
        if(oe.wheelDelta < 0){
            $("body, html").not(":animated").animate({"scrollTop" : "+="+ht+"px"});
        } else {
           $("body, html").not(":animated").animate({"scrollTop" : "-="+ht+"px"});
        }   
    }); 
});    