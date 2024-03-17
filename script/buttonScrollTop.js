document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", function() {
      if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    
    backToTopBtn.addEventListener("click", function() {
      scrollToTop(800);
    });
  });
  
  function scrollToTop() {
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0);
        }
        else clearInterval(scrollInterval); 
    },15);
  }
  