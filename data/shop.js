let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, realPrice, desc_small, img_Front } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="shop_con item">
      <div class="image">
        <img src=${img_Front} alt="${name} image">
      </div>
      <div class="card-content">
        <div class="wrapper">
          <div class="title">${name}</div>
          <p>${desc_small}</p>
          <span class="price">$ ${realPrice}</span>
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
              <select name="category" id="category">
                <option value="Category">Category</option>
                <option value="Driving License">Driving License</option>
                <option value="ID Card">ID Card</option>
              </select>
              <select name="type" id="type">  
                <option value="Type">Type</option>
                <option value="Fake ID">FAke ID</option>
                <option value="Real ID">Real ID</option>
              </select>
              </div>
          </div>
          <div class="btns">
            <button>Buy now</button>
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