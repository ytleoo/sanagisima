var width = $(window).width();
if(width <= 768){
$(function () {
    //初期値
    var nekoLeft = 3000;
    var funeLeft = 1000;
    var namiLeft = -500;
    var nami2Left = 1500;
    var nami3Left = -2000;
    var nami4Left = 2400;
    var nami5Left = -3000;
    var simaLeft = -4600;
    var fune2Left = 4050;
    
    
    $(window).scroll(function() {
	    var value = $(this).scrollTop(); //スクロールの値を取得
	    $('#scrollValue').text(value);
        
        //猫
        $("#neko").css("left", nekoLeft - value / 2);
        
        //船
        $("#fune").css("left", funeLeft - value / 4);
        
        //波
        $("#nami").css("left", namiLeft + value / 3);
        $("#nami2").css("left", nami2Left - value / 4);
        $("#nami3").css("left", nami3Left + value / 2);
        $("#nami4").css("left", nami4Left - value / 4);
        $("#nami5").css("left", nami5Left + value / 2);
        //島
     
        $("#sima").css("left", simaLeft + 100 + value / 2 );
        $("#fune2").css("left", fune2Left - value / 2.7);
        
});
});
    
}else{
$(function () {
    //初期値
    var nekoLeft = 3000;
    var funeLeft = 1000;
    var namiLeft = -500;
    var nami2Left = 1500;
    var nami3Left = -2000;
    var nami4Left = 2400;
    var nami5Left = -3000;
    var simaLeft = -4750;
    var fune2Left = 4140;
    
    
    $(window).scroll(function() {
	    var value = $(this).scrollTop(); //スクロールの値を取得
	    $('#scrollValue').text(value);
        
        //猫
        $("#neko").css("left", nekoLeft - value / 2);
        
        //船
        $("#fune").css("left", funeLeft - value / 4);
        
        //波
        $("#nami").css("left", namiLeft + value / 3);
        $("#nami2").css("left", nami2Left - value / 4);
        $("#nami3").css("left", nami3Left + value / 2);
        $("#nami4").css("left", nami4Left - value / 4);
        $("#nami5").css("left", nami5Left + value / 2);
        //島
     
        $("#sima").css("left", simaLeft + 100 + value / 2 );
        $("#fune2").css("left", fune2Left - value / 2.7);
        
});
});
}