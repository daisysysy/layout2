$(function(){

    $(".menu-group").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".menu-group").mouseleave(function(){
        $(".drop").stop().slideUp();
    })
    
})