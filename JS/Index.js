const Api ='https://khushi-uedn.onrender.com/For_her'

const ApiCall = () => {
  fetch(Api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
    let dataShow = document.getElementById('info');
    
    data.forEach((el) => {
        let Parent_div=document.createElement('div');
        let img = document.createElement('img');
        let title=document.createElement('p');
        let discription= document.createElement('p');
        let price=document.createElement('p')

        Parent_div.classList = "card";
        img.classList = "img_div";

        img.src = el.img;
        title.innerHTML = el.title;
        discription.innerHTML = el.discription;
        price.innerHTML = el.price;

        Parent_div.append(img,title,discription,price)
        dataShow.append(Parent_div);
     });
}
