const Api ='https://khushi-uedn.onrender.com/ForHim';

let allData = [];
let perPage = 6;
let currentPage = 1;

const ApiCall = () => {
  fetch(Api)
    .then((res) => res.json())
    .then((res) => {
      allData = res;
      renderPage();
    })
    .catch((err) => console.log(err));
};

ApiCall();

const renderPage = () => {
    let start = (currentPage - 1) * perPage;
    let end = start + perPage;

    let paginatedData = allData.slice(start, end);

    appendsFunc(paginatedData);

    // Update page number
    document.getElementById("pageNumber").innerText = `Page ${currentPage}`;

    // disable logic
    updateButtons();
};


const appendsFunc = (data) => {
    let dataShow = document.getElementById('info');
    dataShow.innerHTML = "";

    data.forEach((el) => {
        let Parent_div=document.createElement('div');
        let img = document.createElement('img');
        let title=document.createElement('p');
        let discription= document.createElement('p');
        let price=document.createElement('p');
        let Button = document.createElement('button');
        let img_card = document.createElement('div');


        img_card.classList = "img_card"; 
        Parent_div.classList = "card";
        img.classList = "img_div";
        title.classList="title";
        discription.classList="discription";
        price.classList="price";
        Button.classList = "card-btn";


        img.src = el.img;
        title.innerHTML = el.title;
        discription.innerHTML = el.discription;
        price.innerHTML = el.price;
         Button.innerText = "Shop now with free gift";
         
        img_card.append(img)
        Parent_div.append(img_card,title,discription,price,Button);
        dataShow.append(Parent_div);
    });
};


// Button Disable Logic
const updateButtons = () => {
    let totalPages = Math.ceil(allData.length / perPage);

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Prev disable on page 1
    prevBtn.disabled = currentPage === 1;

    // Next disable on last page
    nextBtn.disabled = currentPage === totalPages;
};


// Buttons Click
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
