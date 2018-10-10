	$(function(){

	//轮播图
		var m=0;

		function run(){
			timer=setInterval(function(){
			m++;
			if(m>6){
				m=0;
			}
			$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
			$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			
		},2000)
	}
		run();
		$('.lunbotu ul li').mouseover(function(){
			clearInterval(timer);
				$('.num li').mouseover(function(){
				m=$(this).index();
				$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
				$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
			})
		}).mouseout(function(){
			run();
			});
//楼层
$('.cont ul li').click(function(){
			//获取点击的当前的li
			var index=$(this).index();
			
			//当前floor 距离顶部的位置 offset().top
			console.log($('.cont #cont_cont .conten').eq(index).offset().top);
		
			//设置点击滚动到指定的位置
			//$(document).scrollTop($('.floor').eq(index).offset().top)
			var top=$('.cont #cont_cont .conten').eq(index).offset().top;
			//加动画
			$('html').animate({
			scrollTop:top},500);
		
		})
		
		
		
		//需要获取楼层高度的数组
		var heights=[];
		//向空数组添加高度值 floor 
		$('.cont #cont_cont .conten').each(function(){
			//向一个数组的尾部添加数据 push()
			//获取每一个floor的高度
			heights.push($(this).offset().top)
		})
		//输出数组
		console.log(heights);
		
		
		
		//2.滚动条滚动某一个位置显示对应楼层
		//当前文档的滚动监听事件
		$(window).scroll(function(){
			//获取滚动的距离值
			var top=$(window).scrollTop();
			console.log(top);
			//声明变量
			var index;
			//遍历每一个楼层距离顶部的位置
			for(var i=0;i<heights.length;i++){
				//console.log(heights[i])
				//判断1F 滚动距离>100<700 
				if(top>=heights[i] && top<heights[i+1]){
					index=i;//0 1
					//在1层 显示1F背景色
					$('.ding ul li').eq(index).css('background','#ddd').siblings().css('background','#64c333');
				
				//第七个 top>=自己的offset().top
				}else if(top>=heights[heights.length-1]){
					index=heights.length-1;
					$('.cont ul li').eq(index).css('background','#ea5f8d').siblings().css('background','#000');
				}
			
			}
		})

// 顶部定位
	
			$(window).scroll(function(){
			if($(window).scrollTop()>800){
				$('.dingbu').slideDown();
			}else{
				$('.dingbu').slideUp();
			}
				})




// 选项卡
$('.sidebar ul li').mouseover(function(){
		//显示当前li的背景色其余li的背景去掉
		$(this).addClass('selected').siblings().removeClass('selected');
		
		//对应的内容 需要当前li的下标
		var index=$(this).index();
		console.log(index);
		
		//显示对应的内容
		$('.xiang_pic ul li').eq(index).show().siblings().hide();
		$('.xiang_pic').show();
		})
	$('.xiang_pic ul li').mouseout(function(){
			$(this).hide();
			$('.xiang_pic').hide();
		});
})	
