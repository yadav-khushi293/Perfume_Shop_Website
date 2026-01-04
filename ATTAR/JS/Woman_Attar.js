const api = `https://khushi-uedn.onrender.com/Woman_Attar`;
let Cartapi = `https://khushi-uedn.onrender.com/Cart`;
 
let globalData = [];
let originalData = []; // store original data for "Clear All"
let currentPage = 1;
const itemsPerPage = 9;

const apiCall1 = async() => {
  let loading = document.querySelector(".loading");
  let info = document.querySelector("#info")

  try {
    loading.style.display = "block";
    info.style.height = "200px";

    let res = await fetch(api);
    let data = await res.json()
    globalData = [...data];
    originalData = [...data];
    renderPage();
      renderPagination();

  } catch (error) {
    console.log(error)
  }
  finally{
    loading.style.display = "none"
    info.style.height = "fit-content"
  }
}
window.onload = () => {
  apiCall1();
};


// ================= DROPDOWN FILTER / SORT =================
const dropdown = document.querySelector(".custom-dropdown");
const selected = dropdown.querySelector(".dropdown-selected");
const options = dropdown.querySelector(".dropdown-options");

options.querySelectorAll("li").forEach(option => {
  option.addEventListener("click", () => {
    const value = option.dataset.value;

    selected.textContent = option.textContent;
    options.style.display = "none";

    // Sorting / Filter Logic
    if (value === "asc") {
      globalData.sort((a, b) => Number(a.parice) - Number(b.parice));
    } 
    else if (value === "desc") {
      globalData.sort((a, b) => Number(b.parice) - Number(a.parice));
    } 
    else {
      // Clear Filter
      globalData = [...originalData];
    }

    currentPage = 1;
    renderPage(); 
    renderPagination();
  });
});

// Toggle dropdown
selected.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

// Close on outside click
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    options.style.display = "none";
  }
});

// ================= PAGINATION =================
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

// ================= DATABASE / CARD GENERATION =================
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
    price.innerHTML = `RS.${el.parice}`; // note: matches API field

    const btn_div = document.createElement("div");
    btn_div.className = "btn_div";

    const btn = document.createElement("button");
    btn.className = "addBtn";
    btn.innerHTML = "click";

    
///Add TO Cart Code
     btn.addEventListener("click", async () => {
      console.log("Btn clicked!");
      console.log(el.parice)

      let cartObj = {
        id: el.id,
        img: el.img,
        title: el.title,
        price: el.parice,
        thumb_img: el.img,
      };

      try {
        let res = await fetch(Cartapi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartObj),
        });

        // Optional: check if POST was successful
        if (res.ok) {
          // Save selected product ID to localStorage for slider
          localStorage.setItem("selectedProductId", el.id);
          // Redirect to cart page
          window.location.href = "../../Cart.html";
        } else {
          console.log("Failed to add to cart");
        }
      } catch (err) {
        console.log(err);
      }
    });
///Add TO Cart Code_End


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
    btn_div.append(btn);
    card.append(imgContainer, title, price, btn_div);
    maindiv.append(card);

    // ================= SLIDER DOTS =================
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
