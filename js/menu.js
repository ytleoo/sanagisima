$(function(){
    $("#dmenu li").on("click", function() {
        $("ul.child").slideToggle();
        $('header').toggleClass('openNav');
    });
});
