// Smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// Dynimic Modal
$(".job-modal").on("click", function() {
  $("#job-modal-image").attr("src", $(this).data("image"));
  console.log($(this).data("image-scroll"));
  if($(this).data("image-scroll"))
  {
    $("#scroll-indicator").removeClass("hidden").addClass("scroll-indicator");
  }
  else
  {
    $("#scroll-indicator").removeClass("scroll-indicator").addClass("hidden");
  }

  $("#job-modal-title").html($(this).data("title"));
  $("#job-modal-type").html($(this).data("type"));
  $("#job-modal-description").html($(this).data("description"));

  //reset html from tags
  $("#tags").html(" ");

  var tags = $(this).data("tags").split(',');
  for (var indice in tags)
  {
    if (tags.hasOwnProperty(indice))
    {
      $("#tags").append('<strong class="tag">'+tags[indice]+'</strong>');
    }
  }
});

// Type intro
$(function(){
    $("#what-do-i-work-with").typed({
        strings: ["freelancer...", "Web developer...", "Web Designer <i class='icon heart'></i>"],
        typeSpeed: 0,
        startDelay: 1,
        // backspacing speed
        backSpeed: 1,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 1200,
        // cursor
        cursorChar: "I",
    });
});
