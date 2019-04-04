window.onload = function() {
  var scr = $(".scroll");
  scr.mousedown(function() {
    var startX = this.scrollLeft + event.pageX;
    scr.mousemove(function() {
      this.scrollLeft = startX - event.pageX;
      return false;
    });
  });
  $(window).mouseup(function() {
    scr.off("mousemove");
  });
}
$(window).resize(function() {
  if(document.documentElement.clientWidth < 1000) {
    $(".childe").click(function() {
    if($(this).hasClass("opened")) {
      $(this).removeClass("opened");
      $('.childe').css('display', 'inline-block');
    }else {
      $(this).addClass("opened");
      $('.childe:not(.opened)').css('display', 'none');
    }
    });
  }
 });
