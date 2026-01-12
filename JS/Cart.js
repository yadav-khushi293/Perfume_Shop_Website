const Cartapi = "https://khushi-uedn.onrender.com/Cart";
const selectedProductId = localStorage.getItem("selectedProductId");

const apicall = async () => {
  try {
    let res = await fetch(Cartapi);
    let data = await res.json();
    appendCartItem(data);
  } catch (error) {
    console.log(error);
  }
};
apicall();

let itemPrice;
let totalItemPrice;

const appendCartItem = (data) => {
  console.log("🚀 ~ appendCartItem ~ data:", data);
  const container = document.querySelector(".container");
  totalItemPrice = 0;

  data.forEach((el) => {
    const maindiv = document.createElement("div");
    maindiv.className = "content-div";
    container.classList = "container";
    itemPrice = el.price;

    maindiv.innerHTML = `
      
      <div class="child_1">
        <img src="${el.img}" class="bag">
        <div class="text">
          <p class="Milky_Way">${el.title}</p>
        </div>
      </div>

      <div class="price_container">
        <button class="decrement">-</button>
        <input type="text" class="qty-input" />
        <button class="increment">+</button>
        <div class="delete-btn">
          <i class="bi bi-trash"></i>
        </div>
      </div>

      <div class="child_2">
        <p class="price">${el.price}</p>
      </div>
    `;

    container.append(maindiv);

    // Here we are trying to find total Product amount
    let totalPriceDiv = document.querySelector(".totalItemPrice-div");

    // totalItemPrice += el.price
    totalItemPrice += Number(el.price * (el.qty || 1));
    totalPriceDiv.innerHTML = `
      <p class="totalItem-price">${totalItemPrice}</p>
    `;

    // console.log("🚀 ~ appendCartItem ~ totalItemPrice:", totalItemPrice)

    const incrementBtn = maindiv.querySelector(".increment");
    const qtyInput = maindiv.querySelector(".qty-input");
    const decrementBtn = maindiv.querySelector(".decrement");
    let price = maindiv.querySelector(".price");

    // Initialize quantity from backend
    qtyInput.value = el.qty || 1;
    console.log("Product qty", el.qty);
    price.innerText = Number(el.price) * Number(qtyInput.value);

    incrementBtn.addEventListener("click", async () => {
      let qty = Number(qtyInput.value) + 1;
      // console.log("🚀 ~ appendCartItem ~ qty:", qty)
      if (qty > 10) qty = 10; // max limit
      qtyInput.value = qty;

      decrementBtn.disabled = false;
      if (qty === 10) incrementBtn.disabled = true;

      price.innerText = Number(el.price) * Number(qty);
      totalItemPrice += el.price;
      totalPriceDiv.innerHTML = `
      <p class="totalItem-price">${totalItemPrice}</p>
    `;

      // PATCH updated quantity to backend
      try {
        await fetch(`${Cartapi}/${el.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ qty: qty, price: Number(el.price) * qty }),
          body: JSON.stringify({ qty: qty }),
        });
      } catch (error) {
        console.log("🚀 Backend PATCH error:", error);
      }
    });

    decrementBtn.addEventListener("click", async () => {
      let qty = Number(qtyInput.value) - 1;
      if (qty < 0) qty = 0;
      qtyInput.value = qty;

      incrementBtn.disabled = false;
      decrementBtn.disabled = qty === 0;

      price.innerText = Number(el.price) * Number(qty);
      totalItemPrice -= el.price;
      totalPriceDiv.innerHTML = `
      <p class="totalItem-price">${totalItemPrice}</p>
    `;

      // PATCH updated quantity to backend
      try {
        await fetch(`${Cartapi}/${el.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({ qty: qty, price: Number(el.price) * qty }),
          body: JSON.stringify({ qty: qty }),
        });
      } catch (error) {
        console.log("🚀 Backend PATCH error:", error);
      }
    });

    // Delete button functionality
    let deleteBtn = maindiv.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", async () => {
      try {
        await fetch(`${Cartapi}/${el.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        maindiv.remove();
      } catch (error) {
        console.log("🚀 Delete error:", error);
      }
    });
  });
};
