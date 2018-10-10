$(function(){
	$('#small').mouseover(function(e){
		$('#move,#big').show();
		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;
		console.log(x+":"+y);
		var x=x-$('#move').width()/2;
		var y=y-$('#move').height()/2;
		if(x<=0){
			x=0
		}else if(x>=$('#small').width()-$('#move').width()){
			x=$('#small').width()-$('#move').width();
		}
		if(y<=0){
			y=0
		}else if(y>=$('#small').height()-$('#move').height()){
			y=$('#small').height()-$('#move').height();
		}


		$('#move').css({left:x,top:y});
		var scale=$('#big img').width()/$('#small img').width();
		console.log(scale);
		$('#big img').css({left:-x*scale,top:-y*scale});
		$('#big img').attr('src',$('#small_pic').attr('src'));
	}).mouseout(function(){
		$('#move,#big').hide();
	})
	$('#jian li img').click(function(){
		$('#small_pic').attr('src',$(this).attr('src'));
	});
	$('.ping9 ul li').mouseover(function(){
		$('.ping9 ul li').eq(this).appendTo('.ping9-1').siblings('li').remove('.ping9-1')
	})



// 顶部
var top=$('.contright1-2').offset().top;
var topa=$('.contleft1-1').offset().top;
console.log($('.contright1-2'));
$(window).scroll(function(){
	if($(window).scrollTop()>top){
		$('.contright1-2').addClass('alili');
		$('.dingbu a').addClass('dingbu2');
	}else{
		$('.contright1-2').removeClass('alili')
	}
})

$(window).scroll(function(){
	if($(window).scrollTop()>top){
		$('.contleft1-1').addClass('alili2');
	}else{
		$('.contleft1-1').removeClass('alili2')
	}
})
})
