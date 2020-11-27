let items = [
  {
    id: 1,
    title: "Dilma",
    size: 2500,
    packaging: 5000,
    price: 1000,
  },
  {
    id: 2,
    title: "Jones",
    size: 2500,
    packaging: 5000,
    price: 1500,
  },
  {
    id: 3,
    title: "George Steuart",
    size: 2500,
    packaging: 5000,
    price: 1000,
  },
  {
    id: 4,
    title: "Malwatte valley plantations",
    size: 2500,
    packaging: 5000,
    price: 2000,
  },
  {
    id: 5,
    title: "Prestige Ceylon teas",
    size: 2500,
    packaging: 5000,
    price: 1000,
  },
  {
    id: 6,
    title: "Empire teas",
    size: 2500,
    packaging: 5000,
    price: 2000,
  },
];

let currency = "LKR";

let extras = [
  {
    id: 1,
    title: "Mug",
    price: 500,
  },
  {
    id: 2,
    title: "Silver pin",
    price: 1000,
  },
  {
    id: 3,
    title: "Wooden souvenir",
    price: 1500,
  },
];

const sizes = {
  1000: "Small",
  2500: "Medium",
  5000: "Large",
};

const packages = {
  1000: "Paper pouches",
  2500: "Bags",
  5000: "Tins",
};

let cardContiner = document.getElementById("card-container");
let currentOrderContainer = document.getElementById("currentOrderContainer");
let loyaltyPointsContainer = document.getElementById("loyaltyPointsContainer");
let order = [];
if (typeof Storage !== "undefined") {
  if (sessionStorage.order) {
    console.log(JSON.parse(sessionStorage.order));
    order = JSON.parse(sessionStorage.order);
    renderCurrentOrder();
  }
}
let favourite = [];

function renderCardItems() {
  let itemsHtml = items.map(
    (item) =>
      `<div class="card">
  <img src="images/products/2.jpg" alt="Denim Jeans" style="width: 100%"/>
    <h3 class="card-title">${item.title}</h3>
   
    <p class="filter-title">Size</p>
    <select name="size" id="teaSize${
      item.id
    }" class="filter" onChange="onChangeSize('teaSize${item.id}', ${item.id})">
    <option value="1000" ${
      Number(item.size) === 1000 ? "selected" : null
    }>small - 1000 LKR</option>
    <option value="2500" ${
      Number(item.size) === 2500 ? "selected" : null
    }>medium - 2500 LKR</option>
    <option value="5000" ${
      Number(item.size) === 5000 ? "selected" : null
    }>large - 5000 LKR</option>
  </select>

  <p class="filter-title">
Packaging type
  </p>
  <select name="packaging" id="packaging${
    item.id
  }" class="filter" onChange="onChangePackaging('packaging${item.id}', ${
        item.id
      })">
    <option value="1000" ${
      Number(item.packaging) === 1000 ? "selected" : null
    }>Paper pouches - 1000 LKR</option>
    <option value="2500" ${
      Number(item.packaging) === 2500 ? "selected" : null
    }>Bags - 2500 LKR</option>
    <option value="5000" ${
      Number(item.packaging) === 5000 ? "selected" : null
    }>Tins - 5000 LKR</option>
  </select>

  <p class="price">${
    Number(item.price) + Number(item.size) + Number(item.packaging)
  } ${currency}</p>
  <button onClick="onClickAddToCart(${item.id}, ${item.packaging}, ${
        item.price
      }, ${item.size}, '${item.title}')">Add to Cart</button>
</p>
  </div>`
  );

  let extrasHtml = extras.map(
    (item) =>
      `<div class="card">
  <img src="images/products/3.jpg" alt="Denim Jeans" style="width: 100%"/>
    <h3 class="card-title">${item.title}</h3>
    <p class="price">${item.price} ${currency}</p>
  <button onClick="onClickAddToCartExtras(${item.id}, ${item.price}, '${item.title}')">Add to Cart</button>
</p>
  </div>`
  );

  itemsHtml = itemsHtml.concat(extrasHtml);
  //injects the tea items
  cardContiner.innerHTML = itemsHtml.join("");
}

renderCardItems();

function onChangeSize(id, itemId) {
  const size = document.getElementById(id).value;
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    items[itemIndex].size = size;
  }
  renderCardItems();
}

function onChangePackaging(id, itemId) {
  const packaging = document.getElementById(id).value;
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    items[itemIndex].packaging = packaging;
  }
  renderCardItems();
}

function onClickAddToCart(id, packaging, price, size, title) {
  order.push({
    id,
    packaging,
    price: Number(price) + Number(size) + Number(packaging),
    title,
    size,
    type: "tea",
  });
  if (typeof Storage !== "undefined") {
    sessionStorage.order = JSON.stringify(order);
  }
  renderCurrentOrder();
}

function onClickAddToCartExtras(id, price, title) {
  order.push({
    id,
    packaging: "",
    price,
    title,
    size: "",
    type: "extras",
  });
  if (typeof Storage !== "undefined") {
    sessionStorage.order = JSON.stringify(order);
  }
  renderCurrentOrder();
}

function renderCurrentOrder() {
  const currentOrderHtml = order.map(
    (item) =>
      `<tr>
<td>${item.title}</td>
<td>${sizes[item.size] || ""}</td>
<td>${packages[item.packaging] || ""}</td>
<td>${item.price}</td>
</tr>
`
  );

  const total = order.reduce((a, { price }) => a + price, 0);
  const totalHtml = [
    `
  <tr>
  <td>Total</td>
<td></td>
<td></td>
<td>${total}</td>
  </tr>
  `,
  ];

  currentOrderHtml.push(totalHtml);
  currentOrderContainer.innerHTML = currentOrderHtml.join("");
}

function onClickPlaceOrder() {
  const modalBlack = document.getElementById("orderConfirmationModal");
  const span = document.getElementsByClassName("close")[0];

  modalBlack.style.display = "block";
  span.onclick = function () {
    modalBlack.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modalBlack) {
      modalBlack.style.display = "none";
    }
  };
  if (typeof Storage !== "undefined") {
    let pastOrders = [];
    if (localStorage.pastOrders) {
      pastOrders = JSON.parse(localStorage.getItem("pastOrders"));
      pastOrders.push(order);
    } else {
      pastOrders.push(order);
    }
    localStorage.setItem("pastOrders", JSON.stringify(pastOrders));
  }
  order = [];
  renderCurrentOrder();
}

function onClickAddToFavourite() {
  favourite = [...order];
  if (typeof Storage !== "undefined") {
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }
}

function onClickCheckLoyalty() {
  let pastPoints = 0;
  const currentOrderPoints = order.length > 4 ? 20 : 0;
  if (localStorage.pastOrders) {
    const pastOrders = JSON.parse(localStorage.getItem("pastOrders"));
    console.log(pastOrders);
    const eligibleItems = pastOrders.filter((item) => item.length > 4);
    pastPoints = eligibleItems.length * 20;
  }

  const total = pastPoints + currentOrderPoints;
  const loyaltyPointsHtml = `
  <p class="loyaltyPoints">you have earned - ${total} points</p>
  `;
  loyaltyPointsContainer.innerHTML = loyaltyPointsHtml;
}

function onClickOrderFavourite() {
  if (typeof Storage !== "undefined") {
    order = JSON.parse(localStorage.getItem("favourite"));
    renderCurrentOrder();
  }
}
