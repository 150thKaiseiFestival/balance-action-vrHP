
$(function() {
  var windowWidth = $(window).width();
  if(480<=windowWidth){
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    var height = $("body").outerHeight(true);
    var scpoint1 = (scroll/height)*100+5;
    var scpoint2 = (scroll/height)*100-5;
    if (scpoint1>0 && scpoint1<=80){
      $(".hello").css("width",scpoint1+"%")
    }
    if (scpoint2>0 && scpoint2<=80){
      $(".position").css("width",scpoint2+"%")
   }
   console.log(scpoint1);
  });
  }

});
