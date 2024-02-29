let order_table = document.querySelector(".order_table");
// let checkList = document.querySelectorAll(".checkList input");

// let basket = JSON.parse(localStorage.getItem("data")) || [];
// let imgBox = document.getElementById('imgBox');

    
let TotalAmount = () => {
    // let amount = basket
    // .map((x) => {
    //     let { item, id } = x;
    //     let search = shopItemsData.find((y) => y.id === id) || [];

    //     return item * search.realPrice;
    // })
    // .reduce((x, y) => x + y, 0);
    
    // checkList.forEach(btn => {
    //   if (btn.value = 100) {
    //     return amount + 100
    // }else if (btn.value = 110){
    //     return amount + 110
    // }else if (btn.value = 150){
    //     return amount + 150
    //   }
    // })
    order_table.innerHTML = `
    <tr class="flex_jcsb">
      <th><p>Product :</p></th>
      <th> <p>Sub Total</p></th>
    </tr>
    <tr class="flex_jcsb">
      <td>New York</td>
      <td>$900</td>
    </tr>
    <tr class="flex_jcsb">
      <td><p>Shipping</p></td>
      <td>
        <div class="flex checkList">
          <input type="radio" name="100" id="ship_100" checked value="100">
          <label for="ship_100">4 - 5 Business Days:  <b>$100.00</b></label>
        </div>
        <div class="flex checkList">
          <input type="radio" name="110" id="ship_110" value="110">
          <label for="ship_110">2 - 3 Business Days:  <b>$110.00</b></label>
        </div>
        <div class="flex checkList">
          <input type="radio" name="150" id="ship_150" value="150">
          <label for="ship_150">Overnight Shipping(24hrs):  <b>$150.00</b></label>
        </div>
      </td>
    </tr>
    <tr class="flex_jcsb">
      <td> <p>Total :</p></td>
      <td><h3 class="total_bill">$ $1900}</h3></td>
    </tr>
    `;
};

TotalAmount();

let loadFile = function(event){
imgBox.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) +")";
}

