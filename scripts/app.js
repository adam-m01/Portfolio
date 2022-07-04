$(document).ready(function () {
  jQuery(".container-wrap").append(
    "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
  );

  $(".main").scroll(function () {
    var scrollTop = $(this).scrollTop();

    $(".scroll-down ").css({
      opacity: function () {
        var elementHeight = $(this).height();
        return 1 - scrollTop / elementHeight;
      },
    });
  });

  var scroll_pos = 0;
  $(".main").scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos < 500) {
      $("#homeCircle").css("background", "white");
      $("#projectsCircle").css("background", "none");
      $("#contactCircle").css("background", "none");
    } else if (scroll_pos > 500 && scroll_pos < 1200) {
      $("#homeCircle").css("background", "none");
      $("#projectsCircle").css("background", "white");
      $("#contactCircle").css("background", "none");
    } else if (scroll_pos > 1200) {
      $("#homeCircle").css("background", "none");
      $("#projectsCircle").css("background", "none");
      $("#contactCircle").css("background", "white");
    }
  });
});
