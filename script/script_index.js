var allpro
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://amira-ahmed2.github.io/sellastore/data/db.json', true);
// xhr.open('GET', 'http://localhost:3000/all_product', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      // Use the data retrieved from the JSON file
      allpro=data.all_product.childreen
      forloops(data.men,data.wommen)
    //   displayProducts(data.products)
      displayProducts(allpro)
    //   filterproductinwommen(data)
       

      console.log(allpro);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  }
};
xhr.send();



function forloops(w,m){
    for (let i of m) {
        allpro.push(i)

      }
      for (let i of w) {
        allpro.push(i)

      }
}


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

function filterproductinwommen(data) {
    let categorizedData = {};
    data.forEach(function(item) {
        if (!categorizedData[item.catg]) {
            categorizedData[item.catg] = [];
        }
        categorizedData[item.catg].push(item);
    });
    console.log(categorizedData);

}



  function go_to() {
    window.location.href = 'https://amira-ahmed2.github.io/sellastore/detiles.html';
}
