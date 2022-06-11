$(document).ready(function () {
  jQuery(".container-wrap").append(
    "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
  );

  $(".main").scroll(function () {
    var scrollTop = $(this).scrollTop();

    $(".scroll-down").css({
      opacity: function () {
        var elementHeight = $(this).height();
        return 1 - scrollTop / elementHeight;
      },
    });
  });

  var scroll_pos = 0;
  $(".main").scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos < 600) {
      $("#homeCircle").css("background", "white");
      $("#projectsCircle").css("background", "none");
      $("#contactCircle").css("background", "none");
    } else if (scroll_pos > 600 && scroll_pos < 1400) {
      $("#homeCircle").css("background", "none");
      $("#projectsCircle").css("background", "white");
      $("#contactCircle").css("background", "none");
    } else if (scroll_pos > 1400) {
      $("#homeCircle").css("background", "none");
      $("#projectsCircle").css("background", "none");
      $("#contactCircle").css("background", "white");
    }
  });

  // Fade in elements
  // $('.main').scroll(function() {
  //   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  //   $(".fade").each(function() {
  //     /* Check the location of each desired element */
  //     var objectBottom = $(this).offset().top + $(this).outerHeight();
      
  //     /* If the element is completely within bounds of the window, fade it in */
  //     if (objectBottom < windowBottom) { //object comes into view (scrolling down)
  //       if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
  //     } else { //object goes out of view (scrolling up)
  //       if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
  //     }
  //   });
  // }).scroll(); //invoke scroll-handler on page-load
});
