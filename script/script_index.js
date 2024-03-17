
var xhr = new XMLHttpRequest();
var data
xhr.open('GET', 'https://amira-ahmed2.github.io/sellastore/data/db.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      // Use the data retrieved from the JSON file
      displayProducts(data.products)
      console.log(data.products);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  }
};
xhr.send();






function displayProducts(products) {
    var container = document.getElementById('product-cards-container');
    products.forEach(function(card) {
      var productHTML = `
      <div class="col">
          <div class="card h-100 border-1 ">
          <img src="${card.img}" height="300px;" class="card-img-top shadow-shadow-sm  "  alt="${card.title}" onclick="go_to()" >
          <div class="card-body text-center">
              <small class="card-title text-muted ">${card.catg}</small>
              <h5 class="card-title">${card.title}</h5>
              <h5 class="card-title text-muted ">${card.price}</h5>
      
            </div>
          </div>
        </div>
      `;
      container.innerHTML += productHTML;
    });
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
  
  function scrollToTop() {
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0);
        }
        else clearInterval(scrollInterval); 
    },15);
  }
  

  function go_to() {
    window.location.href = 'https://amira-ahmed2.github.io/sellastore/detiles.html';
}
