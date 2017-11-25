setInterval(function() {
   var hT = $("#bottom").offset().top, // distance from top of element to window top
       wH = window.innerHeight,
       windowScroll = $(window).scrollTop(),
       fixed = $("article").css("position") == "fixed";

       if (windowScroll > (hT-wH)){
         // we see the bottom yet article is still fixed
         // article can't be fixed anymore
         $("article").css({
           "position": "absolute",
           "top": hT-wH-1,
         });
       } else if (windowScroll < (hT-wH) && !fixed) {
         $("article").css({
           "position": "fixed",
           "top": "",
         })
       }
}, 1);
