const Api ='https://khushi-uedn.onrender.com/Forhim';

// ================= VARIABLES =================
let allData = [];
let originalData = [];   // clear filter ke liye
let perPage = 6;
let currentPage = 1;

// ================= API CALL =================
const ApiCall = () => {
    fetch(Api)
        .then((res) => res.json())
        .then((res) => {
            allData = [...res];
            originalData = [...res];
            renderPage();
        })
        .catch((err) => console.log(err));
};

ApiCall();

// ================= FILTER =================

const dropdown = document.querySelector(".custom-dropdown");
const selected = dropdown.querySelector(".dropdown-selected");
const options = dropdown.querySelector(".dropdown-options");

options.querySelectorAll("li").forEach(option => {
  option.addEventListener("click", () => {
    const value = option.dataset.value;

    selected.textContent = option.textContent;
    options.style.display = "none";

    //Sorting OR  Filter Logic
    if (value === "asc") {
      allData.sort((a, b) => Number(a.price) - Number(b.price));
    } 
    else if (value === "desc") {
      allData.sort((a, b) => Number(b.price) - Number(a.price));
    } 
    else {
      // Clear Filter
      allData = [...originalData];
    }

    currentPage = 1;
    renderPage(); // updates DOM
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



// ================= RENDER PAGE =================
const renderPage = () => {
    let start = (currentPage - 1) * perPage;
    let end = start + perPage;

    let paginatedData = allData.slice(start, end);

    appendsFunc(paginatedData);

    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;
    updateButtons();
};

// ================= APPEND DATA =================
const appendsFunc = (data) => {
    let dataShow = document.getElementById('info');
    dataShow.innerHTML = "";

    data.forEach((el) => {
        let Parent_div = document.createElement('div');
        let img_bg = document.createElement('div');
        let img = document.createElement('img');
        let title = document.createElement('p');
        let discription = document.createElement('p');
        let price = document.createElement('p');

        Parent_div.className = "card";
        img_bg.className = "img_bg";
        img.className = "img_div";
        title.className = "title";
        discription.className = "discription";
        price.className = "price";

        img.src = el.img;
        title.innerText = el.title;
        discription.innerText = el.discription;
        price.innerText = `RS.${el.price}`;

        img_bg.append(img);
        Parent_div.append(img_bg, title, discription, price);
        dataShow.append(Parent_div);
    });
};

// ================= BUTTON DISABLE LOGIC =================
const updateButtons = () => {
    let totalPages = Math.ceil(allData.length / perPage);

    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === totalPages;
};

// ================= PAGINATION BUTTONS =================
document.getElementById("nextBtn").addEventListener("click", () => {
    let totalPages = Math.ceil(allData.length / perPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderPage();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
});
