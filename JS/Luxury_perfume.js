const api = `https://khushi-uedn.onrender.com/Luxury_perfumes`;

let globalData = [];
let currentPage = 1;
const itemsPerPage = 9;

function Apicall() {
  fetch(api)
    .then(res => res.json())
    .then(res => {
      globalData = res;
      renderPage();
      renderPagination();
    })
    .catch(err => console.log(err));
}

function renderPage() {
  const maindiv = document.getElementById("info");
  maindiv.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const slicedData = globalData.slice(start, start + itemsPerPage);

  database(slicedData);
}

function renderPagination() {
  const totalPages = Math.ceil(globalData.length / itemsPerPage);
  const pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "Prev";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    currentPage--;
    renderPage();
    renderPagination();
  };

  const pageInfo = document.createElement("span");
  pageInfo.innerHTML = `Page ${currentPage} / ${totalPages}`;

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "Next";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    currentPage++;
    renderPage();
    renderPagination();
  };

  pagination.append(prevBtn, pageInfo, nextBtn);
}

function database(data) {
  const maindiv = document.getElementById("info");

  data.forEach(el => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("p");
    title.className = "title_head";
    title.innerHTML = el.title;

    const price = document.createElement("p");
    price.className = "price";
    price.innerHTML = el.parice;


 const btn_div = document.createElement("div");
  btn_div.className = "btn_div";

    //ADD TO CART BUTTON 
    const btn = document.createElement("button");
    btn.className = "addBtn";
    btn.innerHTML = "Add to Cart";


    const imgContainer = document.createElement("div");
    imgContainer.className = "imgContainer";

    const slider = document.createElement("div");
    slider.className = "slider";

    const figure = document.createElement("figure");

    el.img.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      figure.appendChild(img);
    });

    slider.appendChild(figure);
    imgContainer.appendChild(slider);
     btn_div.append(btn)
    card.append(imgContainer, title, price ,btn_div);
    maindiv.append(card);

    // dots container
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "dots";
    imgContainer.appendChild(dotsContainer);

    const totalImages = el.img.length;
    let currentIndex = 0;
    let slideInterval = null;

    figure.style.width = `${100 * totalImages}%`;
    Array.from(figure.children).forEach(img => {
      img.style.width = `${100 / totalImages}%`;
    });

    const dots = [];
    for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlide();
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    }
    dots[0].classList.add("active");

    function updateSlide() {
      figure.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`;
      dots.forEach((d, idx) => {
        d.classList.toggle("active", idx === currentIndex);
      });
    }

    function startSliding() {
      slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlide();
      }, 800);
    }

    slider.addEventListener("mouseenter", () => {
      if (!slideInterval) startSliding();
    });

    slider.addEventListener("mouseleave", () => {
      clearInterval(slideInterval);
      slideInterval = null;
      currentIndex = 0;
      updateSlide();
    });
  });
}