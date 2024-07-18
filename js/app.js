$(".navbar li a").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top,
      },
      100
    );
  });
$(document).ready(function(){
$(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
        $(".sticky").addClass("stickyadd");
    }else{
        $(".sticky").removeClass("stickyadd");
    }
})
});
// typer effect
var typed = new Typed(".element",{
    strings: ["Ichigo Kurosaki", "shinigami", "soul reaper"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount:Infinity,
    startDelay:1000
});
// progress bar
var p = document.querySelectorAll('.progress-bar');
p[0].setAttribute("style", "width: 95%; transition:1s all");
p[1].setAttribute("style", "width: 90%; transition:1.5s all");
p[2].setAttribute("style", "width: 88%; transition:1.7s all");
// gallery
var numberThumbnails = $(".thumbnails").children().length,
  marginBetweenThumbnails = ".5",
  totalMarginBetweenThumbnails =
    (numberThumbnails - 1) * marginBetweenThumbnails;
thumbnailWitdh = (100 - totalMarginBetweenThumbnails) / numberThumbnails;
$(".thumbnails img").css({
  width: thumbnailWitdh + "%",
  "margin-right": marginBetweenThumbnails + "%",
});
$(".thumbnails img").on("click", function () {
  $(this).addClass("active").siblings().removeClass("active");
  $(".master img").attr("src", $(this).attr("src"));
});
$(".master .fa-chevron-right").on("click", function () {
  if ($(".thumbnails .active").is(":last-child")) {
    $(".thumbnails img").eq(0).click();
  } else {
    $(".thumbnails .active").next().click();
  }
});