function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 100),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy(0, scrollStep);
        }
        else clearInterval(scrollInterval); 
    },100);
}

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
