let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



// SCROLL_IMG_OVSEFLOW_CODE

const api = 'https://khushi-uedn.onrender.com/video';

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((el) => {
    let main_div = document.createElement('div')
    let cardDiv = document.createElement('div');
    let videoWrap = document.createElement('div');
    let video = document.createElement('video');
     
    let titleoffer = document.createElement('div');
    let title = document.createElement('p');
    let price = document.createElement('p');
    let offer = document.createElement('p');

    // Classes
    main_div.classList="main_div";
    cardDiv.className = "cardDiv";
    videoWrap.className = "video_1";
    titleoffer.className = "titleoffer";
    title.className = "title";
    price.className = "price";
    offer.className = "offer";

    // Video URL (important)
    video.src = el.img;   // ✔ Correct key: "img"
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.width = 250;

    // Text
    title.innerText = el.title;
    price.innerText = el.price;
    offer.innerText = el.offer;

    // Build structure
    titleoffer.append(title, price, offer);
    videoWrap.append(video);
    main_div.append(videoWrap, titleoffer)
    cardDiv.append(main_div);

    dataShow.append(cardDiv);
  });
};