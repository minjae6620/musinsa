$(document).ready(function () {

  // 메인 상세보기
  $("div.main>div.mimg1>ul>li").click(function () {
    $("div.main>div.mimg2>h1").removeClass("on");
    var mimg = $(this).index();
    $("div.main>div.mimg2>h1").eq(mimg).addClass("on");
  });

  // coordi
  $("div.coordi>dl>dt").click(function () {
    $("div.coordi>dl>dt").removeClass("on2");
    $(this).addClass("on2");
    $("div.coordi>dl>dd").removeClass("on2");
    $(this).next().addClass("on2");
  });

  //상품정보 더보기
  $("div.contents>div.inpo>p").click(function() {
    $("div.contents>div.inpo>img").addClass("on3");
    $("div.contents>div.inpo>p").css("display","none");
  });


  // 체형정보
  $("div.physical>dl>dt").click(function () {
    $("div.physical>dl>dt").removeClass("on4");
    $(this).addClass("on4");
    $("div.physical>dl>dd").removeClass("on4");
    $(this).next().addClass("on4");
    $("div.physical>dl>dd.on4>dl>dt").removeClass("on5");
    $("div.physical>dl>dd.on4>dl>dt").eq(0).addClass("on5");
    $("div.physical>dl>dd.on4>dl>dd").removeClass("on5");
    $("div.physical>dl>dd.on4>dl>dd").eq(0).addClass("on5");
  });

  $("div.physical>dl>dd>dl>dt").click(function () {
    // var ddon2 = $(this).index();
    $("div.physical>dl>dd.on4>dl>dt").removeClass("on5");
    $(this).addClass("on5");
    $("div.physical>dl>dd.on4>dl>dd").removeClass("on5");
    $(this).next().addClass("on5");
  });

  // 가격,제품,배송정보
  $("div.pricewrap>dl>dt").click(function () {
    $("div.pricewrap>dl>dt").removeClass("on6");
    $(this).addClass("on6");
    $("div.pricewrap>dl>dd").removeClass("on6");
    $(this).next().addClass("on6");
  });
});
