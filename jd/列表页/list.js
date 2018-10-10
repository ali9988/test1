$(function(){
	
    // --------随机图片-------------------------------
    $('#floor .yi .yi_content img').each(function(){
        // $(this).css('background','red');
        $(this).css('background','url(image/list/'+
            Math.floor(Math.random()*19)+'.jpg)').css('backgroundSize','cover')
        // console.log('dsa');
    })

    $('#floor .yi .yi_content .logo img').each(function(){
        // $(this).css('background','red');
        $(this).css('background','url(image/list/'+
            Math.floor(Math.random()*8)+'.jpg_.webp)').css('backgroundSize','cover')
        // console.log('dsa');
    })

    var name = ["银泰百货精品","playboy专卖","军师旗舰店","七匹狼搜客店",
                "GXG贝斯达","马克华菲店","优衣库旗舰店","aape旗舰店",
                "HM品牌官方店"];
    $('#floor .yi .yi_content .yiname').each(function(){
        // $(this).css('background','red');
        // console.log($(this).html());
        $(this).html(name[Math.floor(Math.random()*8)]);
    })

    $('#floor .yi .yi_content .yiprice').each(function(){
        // $(this).css('background','red');
        // console.log($(this).html());
        $(this).html(name[Math.floor(Math.random()*8)]);
    })

    
    // for(var i=0;i<50;i++){
    //     appendli();
    // }  
      
    // $(window).scroll(function(){
    //     var gao = $(window).scrollTop();
    //     console.log(gao);

    //     if(gao>=11700){
    //         // alert('xsa');
    //         // var diyi = setTimeout(function(){
    //             console.log('xsa');
                    
    //         // },3000)
    //         // clearInterval(diyi);
    //     }
    //     if(gao>=12000){
    //         console.log('off');
    //         $(window).off('scroll');

    //     }
    //     // else if(gao>=11800){
    //     //     clearTimeout(diyi);
    //     // }
        
    // })
    //------------------------随机加载 
    window.onload = function(){
        var con = ["银泰百货精品","playboy专卖","军师旗舰店","七匹狼搜客店",
                "GXG贝斯达","马克华菲店","优衣库旗舰店","aape旗舰店",
                "HM品牌官方店"];

       $('#like .likename').each(function(){
            // $(this).css('background','red');
            // console.log($(this).html());
            $(this).html(con[Math.floor(Math.random()*8)]);
        }) 

       $('#like .likeprice').each(function(){
            // $(this).css('background','red');
            // console.log($(this).html());
            $(this).html(con[Math.floor(Math.random()*8)]);
        }) 
    }

    // --------------瀑布流判断高度加载
    $(document).scroll(function(){
        var scrollTop = $(document).scrollTop();
        var Height = $(document).height();
        var clientHeight = $(window).height();
        // --从总文档里面减去上卷的，当前的高度 ，表示的就是剩下的高度，进行判断
        var gao = Height-clientHeight-scrollTop;
        // console.log(scrollTop,docHeight,clientHeight,gao);
        if(gao<=500){
            for(var i=0;i<10;i++){
                appendli();
            }   
        }
        if(Height>=18000){
            $(document).off('scroll');
        }
        
    })
    // -----------添加li标签---------------------
    // for(var i=0;i<50;i++){
    //     appendli();
    // }   
    function appendli(){
        var oli = document.createElement('li');
        var x = Math.ceil(Math.random()*19);
        var n = Math.ceil(Math.random()*9);
        oli.innerHTML = `<img src="image/list/${x}.jpg">
                        <div class="like_logo">
                        <img src="image/list/${n}.jpg_.webp" alt="">
                        </div>
                        <div class="likename">
                            优衣库官方旗舰店
                        </div>
                        <div class="likeprice">
                            夏日折扣季
                        </div>`;
        like.appendChild(oli);  
    }  
    // ----------页面加载完之后 随机给内容---------------------
   
    

    // -----------右侧选项栏栏弹出-------------------------
    yanchi = setTimeout(function(){
        $('#select').fadeIn(1000);
    },500)
    $('#select .select_content .hover').mouseenter(function(){
        // alert('das');
        var n = $(this).index();
        // console.log(n);
        $('#select .select_content .xian').eq(n).fadeIn(500);
    })
    .mouseleave(function(){
        $('#select .select_content .xian').fadeOut(500);
    })


    // ------------右侧楼层开始----------------------

    // $('#loucen .f').mouseover(function(){
    //     $(this).css('background','#3A0F81');
    //     // alert('dsa');
    // }).mouseout(function(){
    //     $(this).css('background','');
    // })


    $('#loucen .f').click(function(){
        // console.log('xsa');
        var index = $(this).index()-1;
        // console.log(index);
        var t = $('#floor .floor').eq(index).offset().top;
        // console.log(t);
        $('html,body').animate({scrollTop:t},500);
        // console.log($(window).scrollTop());
    })
    // $('html').click(function(){
    //     console.log('dsa');
    //      $('html,body').animate({scrollTop:1000},500);
    // })
    var heights=[];
    $('#floor .floor').each(function(){
        heights.push($(this).offset().top)
    })
    // console.log(heights);
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        // console.log(top);

        



        var num;
        for(var j=0;j<heights.length;j++){
            // console.log(heights[0]);
            if(top>=heights[0] && top<heights[1]){
                $('#loucen .f').eq(0).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[1] && top<heights[2]){
                $('#loucen .f').eq(1).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[2] && top<heights[3]){
                $('#loucen .f').eq(2).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[3] && top<heights[4]){
                $('#loucen .f').eq(3).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[4] && top<heights[5]){
                $('#loucen .f').eq(4).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[5] && top<heights[6]){
                $('#loucen .f').eq(5).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[6] && top<heights[7]){
                $('#loucen .f').eq(6).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[7] && top<heights[8]){
                $('#loucen .f').eq(7).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[8] && top<heights[9]){
                $('#loucen .f').eq(8).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[9] && top<heights[10]){
                $('#loucen .f').eq(9).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[10] && top<heights[11]){
                $('#loucen .f').eq(10).css('background','#3A0F81').siblings().css('background','');
            }
            if(top>=heights[11]){
                $('#loucen .f').eq(11).css('background','#3A0F81').siblings().css('background','');
            }
        }
        if(top>100){
            $('#loucen').fadeIn(1000);
        }else if(top<1100){
            $('#loucen').fadeOut(1000);
        }

        $('#reload').click(function(){
            window.location.reload();
        })
        $('#load').click(function(){
            window.location.reload();
        })
    })
    
    

















})

    

















	