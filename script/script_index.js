const listcards = [
    {
        id: 1,
        img: "./images/New folder/imgpro (1).jpg",
        catg: "Accessories",
        title: "Quartz Belt Watch",
        price: "150 جنيه"
    },
    {
        id: 2,
        img: "./images/WhatsApp Image2.jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 3,
        img: "./images/WhatsApp Image3.jpg",
        catg: "Decor",
        title: "Quartz Belt Watch",
        price: "150 جنيه"
    },
    {
        id: 4,
        img: "./images/New folder/imgpro (2).jpg",
        catg: "Decor",
        title: "Room Flash Light",
        price: "150 جنيه"
    },
    {
        id: 5,
        img: "./images/New folder/imgpro (3).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 6,
        img: "./images/New folder/imgpro (4).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 7,
        img: "./images/New folder/imgpro (5).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 8,
        img: "./images/New folder/imgpro (6).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },    {
        id: 9,
        img: "./images/New folder/imgpro (7).jpg",
        catg: "Accessories",
        title: "Quartz Belt Watch",
        price: "150 جنيه"
    },
    {
        id: 27,
        img: "./images/New folder/imgpro (8).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 39,
        img: "./images/New folder/imgpro (9).jpg",
        catg: "Decor",
        title: "Quartz Belt Watch",
        price: "150 جنيه"
    },
    {
        id: 34,
        img: "./images/New folder/imgpro (10).jpg",
        catg: "Decor",
        title: "Room Flash Light",
        price: "150 جنيه"
    },
    {
        id: 95,
        img: "./images/New folder/imgpro (16).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 86,
        img: "./images/New folder/imgpro (8).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 78,
        img: "./images/New folder/imgpro (11).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    },
    {
        id: 89,
        img: "./images/New folder/imgpro (17).jpg",
        catg: "Beauty",
        title: "Women Freshwash",
        price: "150 جنيه"
    }
];
last_new = [
    {
        id: 1,
        img: "./images/blog1.png",
        descriotion: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
        title: "The Richland Center Shooping News and weekly shooper",
        comments: [
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            },
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            },
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            }
        ]
    },
    {
        id: 2,
        img: "./images/blog2.png",
        descriotion: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
        title: "The Shopping News also offers top-quality printing services",
        comments: [
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            }
        ]
    },
    {
        id: 3,
        img: "./images/blog3.png",
        descriotion: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
        title: "Professional design staff and efficient equipment you’ll find we offer",
        comments: [
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            },
            {
                name: "Emilly Blunt",
                time: "  December 4, 2017 at 3:12 pm",
                comment: "Never say goodbye till the end comes!"
            }
        ]
    }
];
const cardsContainer = document.getElementById('product-cards-container');


function add_cards(id_element) {
    // إضافة الكاردز إلى الصفحة
        listcards.forEach(card => {
            const cardHTML = `
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
            id_element.innerHTML += cardHTML;
        });
    
}


add_cards(cardsContainer)
// add_cards(cardsLatestNews)
// add_cards(cardsBastSellers)

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

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://amira-ahmed2.github.io/sellastore/db.json', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      // Use the data retrieved from the JSON file
      console.log(data);
    } else {
      console.error('Request failed with status:', xhr.status);
    }
  }
};
xhr.send();
