var width = $(window).width();
if(width <= 320){
	$('nav').children('ul').css({'display':'none'});
	$('nav').hover(
		function(){
			//『MENU』(#gnav)にホバーしてる時の処理
			//表示するときにスライドダウンさせる。
			$(this).children('ul').slideDown();
		},
		function(){
			//『MENU』(#gnav)にホバーがはずれた時の処理
			//非表示するときにスライドアップさせる。
			$(this).children('ul').slideUp();
		}
	);
}else{
	//『デバイス（ウィンドウ）幅が320px以下』以外のときの時の処理
	$('nav').children('ul').css({'display':'block'});//常に表示させておく。
}