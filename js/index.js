//banner轮播
var timer = null,
	index = -1,
	$ol = $("ol"),
	$olist = $("ol li"),
	$ulist = $("ul li"),
	$recommend = $(".recommend_good"),
	$findGood = $(".findGood"),
	$hotTip = $(".hotTip");
	

timer = setInterval(autoPlay, 3000);

function autoPlay() {
	index++;
	var flag = true;
	if(index == $olist.size() - 1) {
		index = -1;
		flag = false;
	}
	if(flag == false) {
		$ol.css("left", "0px");
	}
	var ol = -1200 * (index + 1) + "px";
	
	$ol.animate({
		left: ol
	}, 1500);
	$ulist.eq(index).addClass("ulist");
}

$ulist.mouseenter(function() {
	clearInterval(timer);
	if($(this).index() == $ulist.size() - 1) {
		index = $(this).index() + 1;
	} else {
		index = $(this).index() - 2;
	}
	
	autoPlay();
}).mouseleave(function() {
	timer = setInterval(autoPlay, 2000);
})

//ajax加载商品
var win_height = $(window).innerHeight();

//console.log(win_height);
$(window).scroll(function(){
	//console.log($(document).scrollTop());
	
	$.ajax({
	type:"get",
	url:"http://127.0.0.1/haiyue/js/data.json?id="+Math.random(),
	async:true,
	success:function(txt){
		//console.log(txt[1].src);
		if($(document).scrollTop() > win_height&&$(document).scrollTop() < win_height*2){
		var str = "";
		for(var i=0;i<6;i++){
			
//			str += "<ul><li><a href=''><img src=img/"+txt[i*3].src+"/></a></li><li><a href=''><img src=img/"+txt[i*3+1].src+"/></a></li><li><a href=''><img src=img/"+txt[i*3+2].src+"/></a></li></ul>";
			str += "<ul><li><a href=''><img src=img/"+txt[i*3].src+"></a></li><li><a href=''><img src=img/"+txt[i*3+1].src+"></a></li><li><a href=''><img src=img/"+txt[i*3+2].src+"></a></li></ul>";
			$recommend.html(str);
			}	
		
		var atr = "";
			atr = "<ul><li><a href=''><img src=img/"+txt[34].src+"></a></li><li><a href=''><img src=img/"+txt[35].src+"></a></li></ul>";
			$hotTip.html(atr);
		
		}else if($(document).scrollTop() > win_height*3){
		var btr = "";
		for(var j=18;j<txt.length-2;j=j+4){
			
//			btr += "<ul><li><a href=''><img src=img/"+txt[i*4].src+" /></a></li><li><a href=''><img src=img/"+txt[i*4+1].src+"/></a></li><li><a href=''><img src=img/"+txt[i*4+2].src+"/></a></li><li><a href=''><img src=img/"+txt[i*4+3].src+"/></a></li></ul>";
			//	btr += "<ul><li><a href=''><img src=img/"+txt[j].src+" ></a></li><li><a href=''><img src=img/"+txt[j+1].src+"></a></li><li><a href=''><img src=img/"+txt[j+2].src+"></a></li><li><a href=''><img src=img/"+txt[j+3].src+"></a></li></ul>";
			btr += `<ul><li><img src=img/${txt[j].src}></li><li><img src=img/${txt[j+1].src}></li><li><img src=img/${txt[j+2].src}></li><li><img src=img/${txt[j+3].src}></li></ul>`;
			}
		}
		$findGood.html(btr);
		
	}
});
	
})
