//slider function основной
var slideShow = 1;//slider photo show
function sliderFun(e){//function для показа и удалении
	if(e == 'right'){
		$('.sliderContent img').css('zIndex', '100000').animate({
		right: '-100%',
		height: 390
	},'3000', function(){
		$(this).remove();
	});
}else if(e === 'left'){
		$('.sliderContent img').css('zIndex', '100').animate({
		
		left: '-100%',
		height: 390
	},'3000', function(){
		$(this).remove();
	});
}
	$('.sliderContent').append('<img src="'+slider[slideShow].img+'">');
	
}
function controlPhotoSlider(e){//function для указание слайда (+-)вперед назад
	if(e > 0){
		if(slideShow < 3){
			slideShow++;
		}else{
			slideShow = 1;
		}
		sliderFun('left');
	}else if(e < 0){
		if(slideShow > 1){
			slideShow--;
		}else{
			slideShow = 3;
		}

	sliderFun('right');
	}
}