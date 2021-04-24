$(function(){

    $(".navMenuBt").click(function(){
        $(".navbar-collapse").slideToggle();
        $(".navbar-collapse").toggleClass("shadown");
    })

    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active")
        $(this).addClass("active")
        $(".navbar-collapse").slideToggle();
    })


    new WOW().init();
    
})