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

// const appendCartItem = (data) => {
//   const container = document.querySelector(".container");

//   data.forEach((el) => {
//     const maindiv = document.createElement("div");
//     maindiv.className = "content-div";

//     maindiv.innerHTML = `
//       <div class="child_1">
//         <img src="${el.img}" class="bag">
//         <div class="text">
//           <p class="Milky_Way">${el.title}</p>
//         </div>
//       </div>

//       <div class="price_container">
//         <button class="decrement">-</button>
//         <input type="text" class="qty-input" />
//         <button class="increment">+</button>
//         <div class="delete-btn">
//           <i class="bi bi-trash"></i>
//         </div>
//       </div>

//       <div class="child_1">
//         <p class="price">${el.price}</p>
//       </div>
//     `;

//     container.append(maindiv);

//     const incrementBtn = maindiv.querySelector(".increment");
//     const qtyInput = maindiv.querySelector(".qty-input");
//     const decrementBtn = maindiv.querySelector(".decrement");
//     let price = maindiv.querySelector(".price");

//     qtyInput.value = 1;
//     let totalPrice = Number(qtyInput.value) * Number(el.price);

//     incrementBtn.addEventListener("click", async () => {
//       // 1️⃣ increase quantity
//       let qty = Number(qtyInput.value) + 1;
//       qtyInput.value = qty;

//       // 2️⃣ disable increment at max
//       if (qty >= 10) {
//         incrementBtn.disabled = true;
//       }

//       // 3️⃣ enable decrement
//       decrementBtn.disabled = false;

//       // 4️⃣ update price in UI
//       price.innerText = Number(el.price) * qty;

//       // 5️⃣ PATCH to backend
//       try {
//         await fetch(`${Cartapi}/${el.id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             qty: qty, // updated quantity
//             price: Number(el.price) * qty, // optional: update price
//           }),
//         });
//         console.log(`Backend updated: id=${el.id}, qty=${qty}`);
//       } catch (error) {
//         console.log("🚀 Backend PATCH error:", error);
//       }
//     });

//     decrementBtn.addEventListener("click", async () => {
//       let qty = Number(qtyInput.value) - 1;
//       if (qty <= 0) qty = 0;
//       qtyInput.value = qty;

//       incrementBtn.disabled = false;
//       if (qty === 0) decrementBtn.disabled = true;

//       price.innerText = Number(el.price) * qty;

//       try {
//         await fetch(`${Cartapi}/${el.id}`, {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             qty: qty,
//             price: Number(el.price) * qty,
//           }),
//         });
//         console.log(`Backend updated: id=${el.id}, qty=${qty}`);
//       } catch (error) {
//         console.log("🚀 Backend PATCH error:", error);
//       }
//     });

//     // Delete button functionality
//     let deleteBtn = maindiv.querySelector(".delete-btn");
//     deleteBtn.addEventListener("click", async () => {
//       console.log("Delete");
//       try {
//         await fetch(`${Cartapi}/${el.id}`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         maindiv.remove();
//       } catch (error) {
//         console.log("🚀 ~ appendCartItem ~ error:", error);
//       }
//     });
//   });
// };





const appendCartItem = (data) => {
  const container = document.querySelector(".container");

  data.forEach((el) => {
    const maindiv = document.createElement("div");
    maindiv.className = "content-div";

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

      <div class="child_1">
        <p class="price">${el.price}</p>
      </div>
    `;

    container.append(maindiv);

    const incrementBtn = maindiv.querySelector(".increment");
    const qtyInput = maindiv.querySelector(".qty-input");
    const decrementBtn = maindiv.querySelector(".decrement");
    let price = maindiv.querySelector(".price");

    // Initialize quantity from backend
    qtyInput.value = el.qty || 1;
    price.innerText = Number(el.price) * Number(qtyInput.value);

    incrementBtn.addEventListener("click", async () => {
      let qty = Number(qtyInput.value) + 1;
      if (qty > 10) qty = 10; // max limit
      qtyInput.value = qty;

      decrementBtn.disabled = false;
      if (qty === 10) incrementBtn.disabled = true;

      price.innerText = Number(el.price) * qty;

      // PATCH updated quantity to backend
      try {
        await fetch(`${Cartapi}/${el.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ qty: qty, price: Number(el.price) * qty }),
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

      price.innerText = Number(el.price) * qty;

      // PATCH updated quantity to backend
      try {
        await fetch(`${Cartapi}/${el.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ qty: qty, price: Number(el.price) * qty }),
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
