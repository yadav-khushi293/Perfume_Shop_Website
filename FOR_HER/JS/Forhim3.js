 const api=`https://khushi-uedn.onrender.com/Bestsellers`
 
 const ApiCall=()=>{
    fetch(api)
    .then((res) => res.json())
    .then((res) => appenddata(res))
    .catch((err) => console.log(err));
 }
const appenddata = (data) => {
    const datashow = document.getElementById('simple_product');

    let el = data[5]; 

    let maindiv = document.createElement('div');
    let imgdiv = document.createElement('div');
    let imgmain_div = document.createElement('div');
    maindiv.classList = "maindiv";
    imgmain_div.classList = "imgmain_div";

    // Thumbnail slider
    const API_URL = `https://khushi-uedn.onrender.com/Him3`;

    const pagi = document.createElement("div");
    const mainDiv = document.createElement("div");
    const thumbsDiv = document.createElement("div");

    pagi.className = "pagi";
    mainDiv.className = "main";
    thumbsDiv.className = "thumbs";

    let currentIndex = 0;

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const leftArrow = document.createElement("div");
        const rightArrow = document.createElement("div");

        leftArrow.className = "arrow";
        rightArrow.className = "arrow";
        leftArrow.innerHTML = "&#10094;";  // ←
        rightArrow.innerHTML = "&#10095;"; // →

        // Slider wrapper
        const sliderWrapper = document.createElement("div");
        sliderWrapper.className = "slider-wrapper";

        data.forEach((src, index) => {
          const img = document.createElement("img");
          img.src = src;
          img.className = "slider-image";
          sliderWrapper.appendChild(img);

          // Thumbnail click
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

        // Wrapper for thumbnails + arrows
        const thumbWrapper = document.createElement("div");
        thumbWrapper.className = "thumb-wrapper";
        thumbWrapper.appendChild(leftArrow);
        thumbWrapper.appendChild(thumbsDiv);
        thumbWrapper.appendChild(rightArrow);

        // Update slider function
        const updateSlider = () => {
          const width = sliderWrapper.children[0].clientWidth;
          sliderWrapper.style.transform = `translateX(${-currentIndex * width}px)`;

          Array.from(thumbsDiv.children).forEach((thumb, idx) => {
            thumb.style.opacity = idx === currentIndex ? "1" : "0.5";
          });
        };

        leftArrow.addEventListener("click", () => {
          currentIndex--;
          if (currentIndex < 0) currentIndex = data.length - 1;
          updateSlider();
        });

        rightArrow.addEventListener("click", () => {
          currentIndex++;
          if (currentIndex >= data.length) currentIndex = 0;
          updateSlider();
        });

        updateSlider();

        pagi.append(mainDiv, thumbWrapper); // append main + thumbnails
        imgdiv.append(pagi);
        imgmain_div.append(imgdiv);
        maindiv.append(imgmain_div);
        datashow.append(maindiv);
      })
      .catch(err => console.error("API Error:", err));
};
