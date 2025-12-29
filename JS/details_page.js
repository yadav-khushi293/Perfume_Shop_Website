const Cartapi = `https://khushi-uedn.onrender.com/Cart`;

const selectedProductId = localStorage.getItem("selectedProductId");


const ApiCall = async () => {
  try {
    let res = await fetch(Cartapi);

    let data = await res.json();

    const product = data.find((p) => p.id == selectedProductId);

    if (product) appenddata(product);

    else console.log("Product not found");

    itemPrice = Number(product.price);

    appenddata(product);

    totalPrice.innerText = "Rs. " + productQty.value * itemPrice;

  } catch (error) {
    console.log(error);
  }
};

ApiCall();

const appenddata = (product) => {
  const datashow = document.getElementById("container");
  datashow.innerHTML = "";

  let images = product.img;

  // Main structure
  let maindiv = document.createElement("div");
  let imgdiv = document.createElement("div");
  let imgmain_div = document.createElement("div");

  maindiv.className = "maindiv";
  imgmain_div.className = "imgmain_div";

  // Slider containers
  const pagi = document.createElement("div");
  const mainDiv = document.createElement("div");
  const thumbsDiv = document.createElement("div");

  pagi.className = "pagi";
  mainDiv.className = "main";
  thumbsDiv.className = "thumbs";

  let currentIndex = 0;

  // Arrows
  const leftArrow = document.createElement("div");
  const rightArrow = document.createElement("div");

  leftArrow.className = "arrow";
  rightArrow.className = "arrow";
  leftArrow.innerHTML = "&#10094;";
  rightArrow.innerHTML = "&#10095;";

  // Slider wrapper
  const sliderWrapper = document.createElement("div");
  sliderWrapper.className = "slider-wrapper";

  // Images + thumbnails
  images.forEach((src, index) => {
    // Main image
    const img = document.createElement("img");
    img.src = src;
    img.className = "slider-image";
    sliderWrapper.appendChild(img);

    // Thumbnail
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = "thumb-image";

    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });

    thumbsDiv.appendChild(thumb);
  });

  mainDiv.appendChild(sliderWrapper);

  // Thumbnail + arrows wrapper
  const thumbWrapper = document.createElement("div");
  thumbWrapper.className = "thumb-wrapper";
  thumbWrapper.append(leftArrow, thumbsDiv, rightArrow);

  // Update slider function
  const updateSlider = () => {
    const width = sliderWrapper.children[0].clientWidth;
    sliderWrapper.style.transform = `translateX(${-currentIndex * width}px)`;

    Array.from(thumbsDiv.children).forEach((thumb, idx) => {
      thumb.style.opacity = idx === currentIndex ? "1" : "0.5";
    });
  };

  // Arrow events
  leftArrow.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateSlider();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    updateSlider();
  });

  updateSlider();

  pagi.append(mainDiv, thumbWrapper);
  imgdiv.append(pagi);
  imgmain_div.append(imgdiv);
  maindiv.append(imgmain_div);
  datashow.append(maindiv);
};


const increment_btn = document.querySelector(".increment");
const decrement_btn = document.querySelector(".decrement");
const totalPrice = document.querySelector(".p3");
const productQty = document.querySelector(".num");
productQty.value = 1;
let itemPrice;

increment_btn.addEventListener("click", () => {
  productQty.value = Number(productQty.value) + 1;

  totalPrice.innerText = "Rs. " + Number(productQty.value) * Number(itemPrice);
});

decrement_btn.addEventListener("click", () => {
  if (productQty.value > 0) {
    productQty.value = Number(productQty.value) - 1;
  }

  if (Number(productQty.value) === 0) {
    decrement_btn.disabled = true;
  }

  totalPrice.innerText = "Rs. " + Number(productQty.value) * Number(itemPrice);
});

