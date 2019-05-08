$(document).ready(function(){
  /* pc 네비게이션  */
  $(".gnb li, .gnb .depth02, .navWrap").mouseenter(function(){
		$(".gnb .depth02, .navWrap").stop(true,false).slideDown(300);
	}).mouseleave(function(){
		$(".gnb .depth02, .navWrap").stop(true,false).slideUp(300);
	});

  /* 모바일 네비 */
  var wrapH = $("#wrap").height()
  $(".mb_nav").height(wrapH);

  $(".mb_naviBar").click(function(){
    if( $(".mb_gnb").css("right") == "0px" ){
      $(".mb_nav").fadeOut(300);
      $(".mb_gnb").animate({"right":"-100%"}, "800" );
      $(".btn_close").animate({"right":"-100%"}, "800" );
    }else{
      $(".mb_nav").fadeIn(300);
      $(".mb_gnb").animate({"right":"0px"}, "800" );
      $(".btn_close").animate({"right":"60%"}, "1000" );
    }
  });
  $(".btn_close").click(function(){
    $(".mb_nav").fadeOut(300);
    $(".mb_gnb").animate({"right":"-100%"}, "800" );
    $(".btn_close").animate({"right":"-100%"}, "800" );
  });

  $(".mb_gnb > li").mouseenter(function(){
		$(this).addClass("on");
	}).mouseleave(function(){
		$(this).removeClass("on");
	});
  $(".mb_gnb > li > a").click(function(){
    var depth02 = $(this).next();
    if( depth02.css("display") == "none" ){
      console.log("123");
      $(".mb_gnb .depth02").slideUp(300);
      depth02.slideDown(300);
    }else{
      console.log("sss");
      $(".mb_gnb .depth02").slideUp(300);
    }

  });


  /* 비주얼 배너 컨트롤러  */
    //맨뒤 한칸 앞으로 빼두기
  $(".visualWrap .train li:last").prependTo(".visualWrap .train");
	$(".visualWrap .train").css({"marginLeft":"-100%"});
    //다음버튼 클릭시
	$(".controller .next").click(function(){
		$(".visualWrap .train").animate({"marginLeft":"-=100%"} , "fast", function(){
			$(".visualWrap .train li:first").appendTo(".visualWrap .train");
			$(".visualWrap .train").css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
		});
    //컨트롤러 숫자 변경
    var visualNum=$(".visualWrap .train li:last").attr("class").substring(3,4);
    $(".controller .vs_num .num").text(visualNum);
    		return false ;
	});
    //이전버튼클릭시
  $(".controller .prev").click(function(){
		$(".visualWrap .train").animate({"marginLeft":"+=100%"} , "fast", function(){
			$(".visualWrap .train li:last").prependTo(".visualWrap .train");
			$(".visualWrap .train").css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
		});
    //컨트롤러 숫자 변경
    var visualNum=$(".visualWrap .train li:nth-child(1)").attr("class").substring(3,4);
    $(".controller .vs_num .num").text(visualNum);
		return false ;
	});

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if(scroll>500){
      $(".section01 .tit").css({"transform":"translateX(-"+(scroll)+"px)"});
    }
  });
  /* 섹션1  */
  $(".skillDT_list li a").click(function(){
    $(".skillDT_list li").removeClass("active");
    $(this).parent().addClass("active");
    var dtNum=$(this).parent().attr("class").substring(2,4);
    var ddNum=$(".skillDD_list li").attr("class").substring(2,4);
    $(".skillDD_list li").removeClass("active");
    $(".skillDD_list li.dd"+dtNum).addClass("active");
    return false;
  });
    //섹션1 의 화살표
  var arrowL = function () {
			$('.arrow').animate({
				'padding-right' : 15
			}, 800, function () {
				arrowR();
			});
		};
	var arrowR = function () {
		$('.arrow').animate({
			'padding-right' : 8
		}, 800, function () {
			arrowL();
		});
	}
	arrowL();

  $( ".skillDT_list li.js_sl a" ).on( "click", function() {
      var $arrowEl = $( ".skillDT_list li.js_sl a .arrow" );
      $( ".skillDT_list li.js_sl a .arrow" ).remove();
      /*
      $( ".skillDT_list li.js_sl" ).each(function(i,el){
          if($(el).find(".arrow").length != 0){
              //arrowEl = $(el).find(".arrow");
              $(el).find(".arrow").remove();
          }
      });
      */
      //$(this).prepend('<img src="../images/btn/img_arrow.png" alt="화살표" class="arrow"/>');
      $(this).prepend($arrowEl);
  });

  /* 섹션3 */
    //1번째
    //맨뒤 한칸 앞으로 빼두기
    var sec03train1 = $(".sec03 .liBig .train.tr1");
  $(".sec03 .liBig .train.tr1 li:last").prependTo(sec03train1);
	$(sec03train1).css({"marginLeft":"-100%"});
   //타이머 작동
  var timer = 	window.setInterval(function(){
    $(sec03train1).animate({"marginLeft":"-=100%"} , "fast", function(){
			$(".sec03 .liBig .train.tr1 li:last").prependTo(sec03train1);
			$(sec03train1).css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
      })
  }, 2000);
    //2번째
    //맨뒤 한칸 앞으로 빼두기
    var sec03train2 = $(".sec03 .liBig .train.tr2");
  $(".sec03 .liBig .train.tr2 li:last").prependTo(sec03train2);
  $(sec03train2).css({"marginLeft":"-100%"});
   //타이머 작동
  var timer = 	window.setInterval(function(){
    $(sec03train2).animate({"marginLeft":"-=100%"} , "fast", function(){
      $(".sec03 .liBig .train.tr2 li:last").prependTo(sec03train2);
      $(sec03train2).css({"marginLeft":"-100%"}); // 한번 움직일때마다 순서 바꾸고 앞으로 기차칸빼기 가동
      })
  }, 2000);

  /* 디자인 갤러리 작동 */
  $(".gallerySmall li a").click(function(){
    $(this).parent().siblings("li").removeClass("on");
		//$(".gallerySmall li").removeClass("on");
		$(this).parent().addClass("on");
		var gallerySelect = $(this).children("img").attr("src");
    var thisGalleryBig = $(this).parents(".gallerySmall").prev(".galleryBig").children("img");
		$(thisGalleryBig).attr("src",gallerySelect );
		return false;
	});

	$(".galleryPaging .next").click(function(){
    var controlNumber = $(this).parents(".galleryWrap").find(".gallerySmall li").length;
    var gPagingOn = $(this).parents(".galleryWrap").find(".gallerySmall .on");
		if($(gPagingOn).index() < controlNumber-1){
				$(gPagingOn).next().children().click();
			} else{
				$(this).parents(".galleryWrap").find(".gallerySmall li:eq(0) a").click();
			}
			return false;
	});
	$(".galleryPaging .prev").click(function(){
    var controlNumber = $(this).parent().prev(".gallerySmall").children().children("li").length;
    var gPagingOn = $(this).parents(".galleryWrap").find(".gallerySmall .on");
		if($(gPagingOn).index() > 0){
				$(gPagingOn).prev().children().click();
			} else{
				$(this).parents(".galleryWrap").find(".gallerySmall li:eq("+(controlNumber-1)+") a").click();
			}
			return false;
	});


});
