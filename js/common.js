$(function(){

    $(".menu-group").mouseenter(function(){
        $(".drop").stop().slideDown();
        $(".drop-back").stop().slideDown();
    })
    $("nav").mouseleave(function(){
        $(".drop").stop().slideUp();
        $(".drop-back").stop().slideUp();
    })
    
})