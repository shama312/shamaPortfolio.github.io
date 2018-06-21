	lookbook();

var lookBookControl = 1;
function lookbook(){
	var lookBookBlock = '';
	$('footer').css('marginTop', '-3px');
	for(var key in lookBook){
		lookBookBlock += '<div class="lookBookBlock" data-art ="'+key+'">';
		lookBookBlock +='<img src="'+lookBook[key].img+'" alt="" />';
		lookBookBlock += '</div>';
	}
	$('.lookbook').html(lookBookBlock);
	$('.lookBookBlock').on('click', showLookBook);
	$('.prev').on('click', showLookBookPrev);
	$('.next').on('click', showLookBookNext);
	$('.closed').on('click', showLookBookClosed);
}

function showLookBook(){
		lookBookControl = $(this).attr('data-art');
		$('.showLookBook').css('display', 'block');
		$('.img_showLookBook').html('<img src="'+lookBook[lookBookControl].img+'">');
	}
function showImg(){$('.img_showLookBook').html('<img src="'+lookBook[lookBookControl].img+'">');};
function showLookBookClosed(){$('.showLookBook').css('display', 'none');};
function showLookBookNext(){if(lookBookControl < 8){lookBookControl++; showImg();}else{lookBookControl = 1; showImg();}};
function showLookBookPrev(){if(lookBookControl > 1){lookBookControl--; showImg();}else{lookBookControl = 8; showImg();}};