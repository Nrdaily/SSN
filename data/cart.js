/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}


let cart_section = document.querySelector(".cart_section");
let label = document.querySelector(".payment_details");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item, name, realPrice, img_Front, img_Back, img_Scan } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="container">

      <div class="product-slides cart-slider">

        <div class="slider-banner" data-slider>
          <figure class="product-banner">
            <img src=${search.img_Front} width="400" height="400" loading="lazy" alt="Nike Sneaker"
              class="img-cover">
          </figure>
        </div>
      </div>

      <div class="product-content cart-content">
      <span class="product-subtitle" style="cursor: pointer;"><i onclick="removeItem(${id})" class="fas fa-trash"></i></span>
        <div class="flex">
          <h1 class="h1 product-title">${search.name}</h1>
          <span data-type-price class="price price-abs" data-total-price>$ ${search.realPrice}</span>
        </div>
            <div class="name colour-name">Category / Type</div>
            <div class="colour-value">
            <select name="category" data-category id="category">
            <option value="" selected disabled>Category</option>
          </select>
          <select name="type" data-type id="type">  
            <option value="" selected disabled>Type</option>
          </select>
            </div>
        <div class="btn-group">
          <div class="counter-wrapper">
            <span class="color"><i onclick="decrement(${id})" class="fas fa-minus"></i></span>
            <div id=${id} class="quantity">${item}</div>
            <span class="color"><i onclick="increment(${id})" class="fas fa-plus"></i></span>
          </div>
          <h3 class="price">$ ${item * search.realPrice}</h3>
        </div>
      </div> 
    </div>
     
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    cart_section.innerHTML = `
    <br><br><br>
    <div class="container">
      <h2 class=heading tac">Cart is Empty</h2>
      <a href="index.html" class="tac">
        <button class="HomeBtn">Back to home</button>
      </a>
    </div>
    `;
  }
};

generateCartItems();

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

  generateCartItems();
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
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.realPrice;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h3>Cart Details</h3>
    <hr>
    <div class="flex_jcsb">
      <p>SubTotal :</p>
      <h2 class="total_bill">$ ${amount}</h2>
    </div>
    <hr>
    <div class="flex_jcsb">
      <h2>Shipping</h2>
      <p class="tar">7 days shipping: <b>$100.00</b><br>
        Shipping options will be updated during checkout.</p>
    </div>
    <hr>
    <div class="flex_jcsb">
      <p>Total :</p>
      <h2 class="total_bill">$ ${amount + 100}</h2>
    </div>
    <hr>
    <div class="flex btns_">
      <a href="order.html">
      <button class="checkout">
        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
        <span class="span">PROCEED TO CHECKOUT</span>
      </button>
      </a>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    </div>  
    `;
  } else return;
};

TotalAmount();


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


/**
 * slider funtionality
 */

const slider = document.querySelectorAll("[data-slider]");
const nextBtn = document.querySelectorAll("[data-next]");
const prevBtn = document.querySelectorAll("[data-prev]");

// set the slider default position
let sliderPos = 0;

// set the number of total slider items
const totalSliderItems = 3;

// make next slide btn workable
const slideToNext = function () {
  sliderPos++;
  for (let i = 0; i < slider.length; i++) {
    const sliders = slider[i];
    sliders.style.transform = `translateX(-${sliderPos}00%)`;
  }
//   slider.style.transform = `translateX(-${sliderPos}00%)`;
  sliderEnd();
}
// addEventOnElem(nextBtn, "click", slideToNext);

for (let i = 0; i < nextBtn.length; i++) {
    const btn = nextBtn[i];
    btn.addEventListener('click', slideToNext);
}

// make prev slide btn workable
const slideToPrev = function () {
  sliderPos--;
  for (let i = 0; i < slider.length; i++) {
      const sliders = slider[i];
      sliders.style.transform = `translateX(-${sliderPos}00%)`;
  }
//   slider.style.transform = `translateX(-${sliderPos}00%)`;
  sliderEnd();
}
// addEventOnElem(prevBtn, "click", slideToPrev);
for (let i = 0; i < prevBtn.length; i++) {
    const btn = prevBtn[i];
    btn.addEventListener('click', slideToPrev);
}


// check when slider is end then what should slider btn do
function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    for (let i = 0; i < nextBtn.length; i++) {
        const btn = nextBtn[i];
        btn.classList.add("disabled");
    }
  } else {
    for (let i = 0; i < nextBtn.length; i++) {
        const btn = nextBtn[i];
        btn.classList.remove("disabled");
    }
  }

  if (sliderPos <= 0) {
    for (let i = 0; i < prevBtn.length; i++) {
        const btn = prevBtn[i];
        btn.classList.add("disabled");
    }
  } else {
    for (let i = 0; i < prevBtn.length; i++) {
        const btn = prevBtn[i];
        btn.classList.remove("disabled");
    }
  }
}

sliderEnd();