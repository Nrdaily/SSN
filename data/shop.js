// import { shopItemsData } from "./data.js";

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, realPrice, desc_small, img_Front } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="shop_con item hide">
      <div class="image">
        <img src=${img_Front} alt="${img_Front} state">
      </div>
      <div class="card-content">
        <div class="wrapper">
          <div data-title class="title">${name}</div>
          <p>${desc_small}</p>
          <span data-type-price class="price">Select <br> type</span> 
          <div class="content size">
            <div class="name size-name">Quantity</div>
            <div class="size-value">
              <span class="color"><i onclick="decrement(${id})" class="fas fa-minus"></i></span>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <span class="color"><i onclick="increment(${id})" class="fas fa-plus"></i></span>
            </div>
          </div>
          <div class="content colour">
          <div class="name colour-name">Category / Type</div>
            <div class="colour-value">
              <select name="category" data-category id="category">
                <option value="" selected disabled>Category</option>
              </select>
              <select name="type" data-type id="type">  
                <option value="" selected disabled>Type</option>
              </select>
              </div>
          </div>
          <div class="btns">
            <button><a href="cart.html">Buy Now</a></button>
            <button><a href="products_view.html">View More</a></button>
          </div>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};
generateShop();

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  // let buttons = document.querySelector(".button-value");
  // buttons.forEach((button) => {
  //   //check if value equals innerText
  //   if (value.toUpperCase() == button.innerText.toUpperCase()) {
  //     button.classList.add("active");
  //   } else {
  //     button.classList.remove("active");
  //   }
  // });

  //select all cards
  let elements = document.querySelectorAll(".shop_con");
  //loop through all cards
  elements.forEach((item) => {
    //display all cards on 'all' button click
    if (value == "all") {
      item.classList.remove("hide");
    } else {
      //Check if item contains category class
      if (item.classList.contains(value)) {
        //display item based on category
        item.classList.remove("hide");
      } else {
        //hide other items
        item.classList.add("hide");
      }
    }
  });
}
filterProduct();


//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll("[data-title]");
  let items = document.querySelectorAll(".item");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput)) {
      //display matching card
      items[index].classList.remove("hide");
    } else {
      //hide others
      items[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};



const category = ["Driving License", "ID Card"];
const DLtypes = ['Fake DL', 'Real DL'];
const IDtypes = ['Fake ID', 'Real ID'];
const prices = [900, 120];

const idCategory = document.querySelectorAll('[data-category]');
const idType = document.querySelectorAll('[data-type]');
const typePrice = document.querySelectorAll('[data-type-price]');

category.forEach(function addCategory(item) {
  idCategory.forEach((id) => {
    let option = document.createElement('option');
    option.text = item;
    option.value = item;
    id.appendChild(option);
  })
})
idCategory.forEach((id) => {
  id.onchange = function() {
    idType.forEach((id) => {
      id.innerHTML = "<option></option>";
    })
    if (this.value == "Driving License") {
      addToIdType(DLtypes)
    }
    if (this.value == "ID Card") {
      addToIdType(IDtypes)
    }
  }
})

function addToIdType(arr){
  arr.forEach(function (item){
    idType.forEach((id) => {
      let option = document.createElement('option');
      option.text = item;
      option.value = item;
      id.appendChild(option)
    })
  })
}

idType.forEach((id) => {
  id.onchange = function() {
    if (this.value == "Fake ID" || this.value == "Fake DL") {
      typePrice.forEach(price => {
        price.innerText = prices[1];
      })
    }
    if (this.value == "Real DL" || this.value == "Real ID") {
      typePrice.forEach(price => {
        price.innerText = prices[0];
      })
    }
  }
})


function addToIdType(arr){
  arr.forEach(function (item){
    idType.forEach((id) => {
      let option = document.createElement('option');
      option.text = item;
      option.value = item;
      id.appendChild(option)
    })
  })
}


let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  const cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();