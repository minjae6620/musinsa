$(document).ready(function () {

  //랭킹
  var htsz = 1;
  $("p.typo2").click(function () {
    htsz++
    if (htsz > 2) {
      htsz = 3;
    };
    $("div.contents2>div>ol").css("height",""+(380*htsz)+"px");
  });



  //slide
  var sld = 0;

  $(".btnNext").click(function () {
    sld++;
    if (sld > 3) {
      sld = 0;
    };
    slideSet(sld);
    // $(".slider").css("transform","translateX(-"+(sld*25)+"%)");
  });

  $(".btnPrev").click(function () {
    sld--;
    if (sld < 0) {
      sld = 3;
    };
    slideSet(sld);
    // $(".slider").css("transform","translateX(-"+(sld*25)+"%)");
  });

  function slideSet(set1) {
    $(".slider").css("transform","translateX(-"+(set1*25)+"%)");
    $(".pageList>li").removeClass("on");
    $(".pageList>li:nth-of-type("+(set1+1)+")").addClass("on");
  }

  $(".pageList>li").click(function () {
    $(".pageList>li").removeClass("on");
    $(this).addClass("on");
    var clbt = $(this).index();
    sld = clbt
    // $(".slider").css("transform","translateX(-"+(clbt*25)+"%)");
    slideSet(sld);
  })

});
