var allProducts; // Define allProducts variable
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://amira-ahmed2.github.io/sellastore/data/db.json', true);
// xhr.open('GET', 'http://localhost:3000/all_product', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      // Use the data retrieved from the JSON file
    //   allpro=data.all_product
    //   console.log(allpro);
    //   forloops(data.men,data.wommen)
    //   displayProducts(data.all_product)
        allProducts = data.all_product;
      displayProducts(allProducts,4)
      filterproductinwommen()
       

    } else {
      console.error('Request failed with status:', xhr.status);
    }
  }
};
xhr.send();



function displayProducts(products, limit) {
    var container = document.getElementById('product-cards-container');
    // تحديد العدد المطلوب من المنتجات
    var productsToDisplay = products.slice(0, limit);
    productsToDisplay.forEach(function(card) {
      var productHTML = `
        <div class="col">
          <div class="card h-100 border-1">
            <img src="${card.img}" height="300px;" class="card-img-top shadow-shadow-sm" alt="${card.title}" onclick="go_to()">
            <div class="card-body text-center">
              <small class="card-title text-muted">${card.catg}</small>
              <h5 class="card-title">${card.title}</h5>
              <h5 class="card-title text-muted">${card.price}</h5>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += productHTML;
    });
  
    // إذا كان هناك المزيد من المنتجات لعرضها
    if (products.length > limit) {
      // إضافة زر لعرض الجميع
      var showAllButton = document.getElementById('show_all');
    //   showAllButton.textContent = 'عرض الجميع';
    //   showAllButton.classList.add('btn', 'btn-secondary', 'rounded-5', 'px-5', 'py-3', 'text-wrap');
      showAllButton.addEventListener('click', function() {
        // عرض جميع المنتجات
        displayAllProducts(products);
        // إخفاء الزر بمجرد النقر عليه
        showAllButton.style.display = 'none';
      });
      // إضافة الزر للصفحة
      var buttonContainer = document.querySelector('.text-center.mt-5');
      buttonContainer.appendChild(showAllButton);
    }
  }
  
  // دالة لعرض جميع المنتجات
  function displayAllProducts(products) {
    var container = document.getElementById('product-cards-container');
    container.innerHTML = ''; // مسح المحتوى الحالي
    products.forEach(function(card) {
      var productHTML = `
        <div class="col">
          <div class="card h-100 border-1">
            <img src="${card.img}" height="300px;" class="card-img-top shadow-shadow-sm" alt="${card.title}" onclick="go_to()">
            <div class="card-body text-center">
              <small class="card-title text-muted">${card.catg}</small>
              <h5 class="card-title">${card.title}</h5>
              <h5 class="card-title text-muted">${card.price}</h5>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += productHTML;
    });
  }
  
  
  function filterproductinwommen() {
    var filterOptions = document.querySelectorAll('.filter-option');

    // إضافة حدث click لكل عنصر يحتوي على الفئات المطلوب تصفيتها
    filterOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            var filterId = this.getAttribute('id'); // الحصول على قيمة الـ id المحددة

            // تطبيق الفلترة على البيانات وعرض النتائج المصفاة
            var filteredProducts = allProducts.filter(function(product) {
                return product.catg === filterId; // تصفية البيانات بناءً على الـ id
            });

            // تنظيف العنصر الذي يحمل المنتجات قبل عرض المنتجات الجديدة
            var container = document.getElementById('product-cards-container');
            container.innerHTML = '';

            // عرض النتائج المصفاة
            displayProducts(filteredProducts,filteredProducts.length); // عرض عدد محدد من المنتجات
        });
    });
}




  function go_to() {
    window.location.href = 'https://amira-ahmed2.github.io/sellastore/detiles.html';
}
