// import { shopItemsData } from "./data.js";

let dataP_desc = document.querySelectorAll("[data-p_desc_p]");
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
           <button data-open_details data-name="${id}">View More</button>
          </div>
        </div>
      </div>
    </div>
    `;
    })
    .join(""));
};
console.log(shopItemsData.length)
generateShop();

dataP_desc.forEach(p => {
  p.textContent = `Georgia, Georgian Sakartvelo, nation of Transcaucasia situated at the eastern finish of the Black Sea on the southern flanks of the fundamental peak of the Greater Caucasus Mountains. It is limited on the north and upper east by Russia, on the east and southeast by Azerbaijan, on the south by Armenia and Turkey, and on the west by the Black Sea. Georgia incorporates three ethnic territories: Abkhazia, in the northwest (head city Sokhumi); Ajaria, in the southwest (head city Batʿumi); and South Ossetia, in the north (head city Tskhinvali). The capital of Georgia is Tbilisi (Tiflis).

  The underlying foundations of the Georgian public broaden somewhere down ever; their social legacy is similarly antiquated and rich. During the middle age time frame, an incredible Georgian realm existed, arriving at its stature between the tenth and thirteenth hundreds of years. After an extensive stretch of Turkish and Persian mastery, Georgia was attached by the Russian Empire in the nineteenth century. An autonomous Georgian state existed from 1918 to 1921, when it was joined into the Soviet Union. In 1936 Georgia turned into a constituent (association) republic and proceeded as such until the breakdown of the Soviet Union. During the Soviet time frame, the Georgian economy was modernized and expanded. One of the most autonomy disapproved of republics, Georgia announced power on November 19, 1989, and freedom on April 9, 1991.
  
  The 1990s were a time of insecurity and common agitation in Georgia, as the first postindependence government was toppled and nonconformist developments arose in South Ossetia and Abkhazia.
  
  We are the only and one agency in the world that can provide the Real diver’s license of Georgia online. If you have tried several times to get a real driver’s license of Georgia. but didn’t succeed after long documentation, written and practical process so don’t worry because now you are in the right place, You are just a few steps away from a real driver’s license of Georgia. Follow the procedure and place an order for a real driver’s license to get it at your doorstep in the next few days. Our prices are reasonable.
  
  We are also providing a fake driver’s license in Georgia. If you can’t afford the fees for a real driver’s license of Georgia so our fake driver’s license is also of high quality and non-detectable. Order a fake driver’s license today and drive on Georgia‘s roads from next week without any hassle. We use fast sources for the delivery because we respect the need of our customers.`;
})


//parameter passed from button (Parameter same as category)
function filterProduct(value) {

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

const closeX = document.querySelectorAll('.closeX').forEach(btn => {
  btn.addEventListener('click', () => {
    id_descBtn.forEach(id_desc => {
      id_desc.classList.remove('active');
      document.body.style.overflowY = 'auto';
    })
  })
})
const id_descBtn = document.querySelectorAll('.id_desc')

document.querySelectorAll('[data-open_details]').forEach(btn =>{
  btn.onclick = () =>{
    let name = btn.getAttribute('data-name');
    id_descBtn.forEach(id_desc =>{
      let target = id_desc.getAttribute('data-target');
      if(name == target){
        id_desc.classList.add('active');
        document.body.style.overflowY = 'hidden';
      }
    });
  };
});