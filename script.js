$(document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top:"-150px"
        }, "slow");
         $(".text").stop().animate({
            top:"-95px"
        }, "slow");
        $(".heart").stop().animate({
            top:"-260px"
        }, "slow");
    }).mouseleave(function(){
      $(".card").stop().animate({
        top: -30
      }, "slow");
       $(".text").stop().animate({
        top: 30
      }, "slow");
      $(".heart").stop().animate({
        top:-120
      }, "slow");
    });
    });