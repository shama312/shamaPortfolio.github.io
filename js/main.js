
var card = {};
window.onload = function(){
sliderFun();
hotWeek();
setInterval(function(){controlPhotoSlider('1');}, 3000 );
//работа  с карзинами
checkCard();
showProduct();
$('.cartindex').on('click',openCart);
function openCart(){
	$('.cartBody').animate({
		width: '100%'
	},1000, function(){
		$('.cartBlock').animate({
			right: '0%'
		},500);
	});
}
$('.headCart button').on('click',closedCart);
$('.cartBody').on('click',closedCart);
function closedCart(){
	$('.cartBody').animate({
		width: 0
	}, function(){
		$('.cartBlock').animate({
			right: '-300%'
		},1000);
	});
}
//
function showProduct(){
	var out = '';
	var mc = 0;
	for(var key in card){
		out += '<div class="tovarBlock">'
		out += '<img src="'+ tovary[key].img+'">';
		out += '<div><h1>'+tovary[key].name+'</h1>';
		out += '<p>'+tovary[key].price+'</p></div>';
		out += '<div class="control"><button class="minus" data-art="'+ key+'">-</button>';
		out += '<p class="key">'+card[key]+'</p>';
		out += '<button class="plus" data-art="'+ key+'">+</button>';
		out += '<button class="del" data-art="'+ key+'"><i class="fas fa-trash"></i></button></div>';
		out += '</div>';
		var nms = card[key];
		mc = mc + nms;
	}
	$('.shop_cal').html(mc);
	$('.contentCart').html(out);
	$('.plus').on('click', plusProduct);
	$('.minus').on('click', minusProduct );
	$('.del').on('click',delProduct );
}
function plusProduct(){
	var art = $(this).attr('data-art');
	card[art]++;
	localStorage.setItem('card', JSON.stringify(card));
	checkCard();
	showProduct();
}

function minusProduct(){
	var art = $(this).attr('data-art');
	if(card[art] > 1){card[art]--;}else{delete card[art];}

	localStorage.setItem('card', JSON.stringify(card));
	checkCard();
	showProduct();
	
}
function delProduct(){
	var art = $(this).attr('data-art');
	delete card[art];
	localStorage.setItem('card', JSON.stringify(card));
	checkCard();
	showProduct();
	
}
//купить
$('.add').on('click', bayProduct);
function bayProduct(){
	var articl = $(this).attr('data-art');
	if(card[articl] != undefined){
		card[articl]++;
	}else{
		card[articl] = 1;
	}
	localStorage.setItem('card', JSON.stringify(card));
	console.log(card);
	checkCard();
	showProduct();
}
// контроль каличество
//
function checkCard(){
	if(localStorage.getItem('card') != null){
		card = JSON.parse (localStorage.getItem('card'));
	}
}

//mobile menu
$('.mobile_menu').on('click', function(){
	if($('.menu_li').css( 'display') === 'none'){
		$('.menu_li').css( 'display', 'block');
		$('.mobile_menu').html('<i class="fas fa-times"></i>');
	}else{
		$('.menu_li').css( 'display', 'none');
		$('.mobile_menu').html('&#9776;');
	}
	
});
//end cart function
}



//function все товары
function hotWeek(){
	var out = '';
	var mens = '';
	var womens = '';
	for(var w in tovary){
		// популярные товары index
		if( tovary[w].discounts){
			out += '<div class="tovary">';
			out += '<div class="img"><img src="'+tovary[w].img +'">';
			out += '<button class="add" data-art="'+w+'">добавить в корзину</button></div>';
			out += '<div class="text"><p class="name">'+ tovary[w].name+'<p>';
			out += '<p class="price"><span>  '+'  '+ tovary[w].oldprice+'</span>'+tovary[w].price+'<p></div>';
			out += '</div>';
		}
		//mens html blokc
		if(tovary[w].sex === 'men'){
			mens += '<div class="tovary">';
			mens += '<div class="img"><img src="'+tovary[w].img +'">';
			mens += '<button class="add" data-art="'+w+'">добавить в корзину</button></div>';
			mens += '<div class="text"><p class="name">'+ tovary[w].name+'<p>';
			mens += '<p class="price"><span>  '+'  '+ tovary[w].oldprice+'</span>'+tovary[w].price+'<p></div>';
			mens += '</div>';
		}
		//womens html
		if(tovary[w].sex === 'women'){
			womens += '<div class="tovary">';
			womens += '<div class="img"><img src="'+tovary[w].img +'">';
			womens += '<button class="add" data-art="'+w+'">добавить в корзину</button></div>';
			womens += '<div class="text"><p class="name">'+ tovary[w].name+'<p>';
			womens += '<p class="price"><span>  '+'  '+ tovary[w].oldprice+'</span>'+tovary[w].price+'<p></div>';
			womens += '</div>';
		}
	}
		$('.contentHotWeek').html(out);
		$('.mensContent').html(mens);
		$('.womensContent').html(womens);
}
