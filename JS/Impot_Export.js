const user_login = new URL("../Utiles/download.jpeg", import.meta.url).href;
const neesh_logo = new URL("../Utiles/neesh_logo.webp", import.meta.url).href;
const Add_card = new URL("../Utiles/shopping-bag.svg", import.meta.url).href;
const footer_img_logo = new URL(
  "https://cdn.shopify.com/s/files/1/2806/3100/files/crest-new-logo.png?v=1743594000",
  import.meta.url
).href;
const facebook = new URL("../Utiles/fecbook.webp", import.meta.url).href;
const insta = new URL("../Utiles/insta.webp", import.meta.url).href;
const Linkedin_Icon = new URL("../Utiles/Linkedin_Icon.webp", import.meta.url)
  .href;
const memu_img = new URL("../Utiles/download (1).png", import.meta.url).href;
const serch_img = new URL("../Utiles/download (2).png", import.meta.url).href;

const Cartapi = "https://khushi-uedn.onrender.com/Cart";

export const Navbar = async () => {
  try {
    let res = await fetch(Cartapi);
    let data = await res.json();
    console.log("🚀 ~ Navbar ~ data:", data);
    // let totalCartItems = data.length;

    return `
                <nav>
                     <p class="headre">FESTIVE SEASON SALE | FLAT 15% OFF | NO CODE NEEDED*</p>
                </nav>

    <div  class="parenst">
         <div class="header_1">

            <div class="header_child_1">
                <img src="${memu_img}" class="memu_img">
                <p class="menu">Menu</p>
            </div>

            <div class="header_child_1">
               <input type="text" placeholder='Search' class="Serching" ></input>
            </div>

         </div>

         <a href="../Index.html">
        <div class="header_2">
            <img src="${neesh_logo}" class="neesh_logo">
        </div>
       </a>
        <div class="header_3">
            <a href="../Login_page.html">
            <img src="${user_login}" class="user_login">
             </a>
            <img src="${Add_card}" class="Add_card">
            <div class="total-cart-items">
                <p>${data.length}</p>
            </div>
        </div>
    </div>
    `;
  } catch (error) {
    console.log("🚀 ~ Navbar ~ error:", error);
  }
  //   return `
  //       <nav>
  //         <p class="headre">FESTIVE SEASON SALE | FLAT 15% OFF | NO CODE NEEDED*</p>
  //     </nav>

  //     <div  class="parenst">
  //          <div class="header_1">

  //             <div class="header_child_1">
  //                 <img src="${memu_img}" class="memu_img">
  //                 <p class="menu">Menu</p>
  //             </div>

  //             <div class="header_child_1">
  //                <input type="text" placeholder='Search' class="Serching" ></input>
  //             </div>

  //          </div>

  //          <a href="../Index.html">
  //         <div class="header_2">
  //             <img src="${neesh_logo}" class="neesh_logo">
  //         </div>
  //        </a>
  //         <div class="header_3">
  //             <a href="../Login_page.html">
  //             <img src="${user_login}" class="user_login">
  //              </a>
  //             <img src="${Add_card}" class="Add_card">
  //             <div class="total-cart-items">
  //                 <p>${totalCartItems}</p>
  //             </div>
  //         </div>
  //     </div>
  //     `;
};
export const Navbar_css = () => {
  return `
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  list-style: none;
  cursor: pointer;
}
.Serching{
width:150px;
font-size:16px;
padding:0px 8px;
color:#787777;
border:2px solid #cfcacaff;
border-radius:3px;
height:37px;
}

.headre{
    text-align: center;
    font-size: 14px;
    background-color: #bf1522;
    color:#fff;
    padding: 10px 0px;
    word-spacing: 4px;
    height: 35px;

}
.memu_img{
  width: 35px;
  height: 35px;
}
.user_login {
    width: 30px;
    height: 32px;
    margin-top: 9px;
}
.Add_card{
    width: 40px;
    height:40px;
}
.total-cart-items{
    position: absolute;
    top: 10px;
    background-color:#d6a651;
  color: #ede7e7;
      border:transparent;
    right: -15px;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-item: center;
    border-radius: 50%;
}
.serch_img{
    width: 29px;
    height: 29px;
}
.header_child_1{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.header_3{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.header_1{
    display: flex;
    font-weight:bold;
    font-size: 17px;
    color: #454545;
    gap: 50px;
}
.parenst{
    display: flex;
    justify-content:space-between;
    padding: 0px 65px;
    /* margin-bottom:20px; */
    height: 87px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.neesh_logo{
   
    padding: 20px 0px;
    padding-right: 180px;
}


@media (max-width: 320px){
.parenst {
    display:flex;
    padding: 0px 8px;
    height:60px;
  
}
    .headre {
    font-size:8px;
    padding: 12px 0px;
    height: 31px;
}
.neesh_logo {
    padding: 20px 0px;
    padding-right:0px;
    width: 80px;
}
.header_1 {
    font-size: 17px;
    gap:0px;
}
    .memu_img {
    width: 24px;
    height: 24px;
}
    .header_3 {
    display: flex;
    gap: 9px;
}
.menu{
        font-size: 12px;
}
  .Serching {
    width: 69px;
    font-size: 9px;
    padding: 0px 8px;
    height: 25px;
}

.user_login {
    width: 21px;
    height: 22px;
    margin-top: 6px;
}
    .Add_card {
    width:29px;
    height: 40px;
}
    .header_child_1 {
    gap: 10px;
    padding: 0px 4px;
}
}
 @media (max-width: 420px){

 .parenst {
    display:flex;
    padding: 0px 8px;
    height:60px;
  
}
    .headre {
    font-size:8px;
    padding: 12px 0px;
    height: 31px;
}
.neesh_logo {
    padding: 20px 0px;
    padding-right:0px;
    width: 80px;
}
.header_1 {
    font-size: 17px;
    gap:0px;
}
    .memu_img {
    width: 24px;
    height: 24px;
}
    .header_3 {
    display: flex;
    gap: 9px;
}
.menu{
        font-size: 12px;
}
  .Serching {
    width: 69px;
    font-size: 9px;
    padding: 0px 8px;
    height: 25px;
}

.user_login {
    width: 21px;
    height: 22px;
    margin-top: 6px;
}
    .Add_card {
    width:29px;
    height: 40px;
}
    .header_child_1 {
    gap: 10px;
    padding: 0px 4px;
}
    .total-cart-items {
    top: 10px;
    right: -2px;
    font-size: 10px;
    height: 14px;
    width: 16px;
}
 }

 @media (min-width: 421px) and (max-width:440px){
 .parenst {
    display:flex;
    padding: 0px 8px;
    height:60px;
}
  .total-cart-items {
    top: 10px;
    right: -2px;
    font-size: 10px;
    height: 14px;
    width: 16px;
}
    .headre {
    font-size:8px;
    padding: 12px 0px;
    height: 31px;
}
.neesh_logo {
    padding: 20px 0px;
    padding-right:0px;
    width: 80px;
}
.header_1 {
    font-size: 17px;
    gap:0px;
}
    .memu_img {
    width: 24px;
    height: 24px;
}
    .header_3 {
    display: flex;
    gap: 9px;
}
.menu{
        font-size: 12px;
}
  .Serching {
    width: 69px;
    font-size: 9px;
    padding: 0px 8px;
    height: 25px;
}

.user_login {
    width: 21px;
    height: 22px;
    margin-top: 6px;
}
    .Add_card {
    width:29px;
    height: 40px;
}
    .header_child_1 {
    gap: 10px;
    padding: 0px 4px;
}
}
 @media (min-width: 481px) and (max-width: 840px){
 .neesh_logo {
    padding: 20px 0px;
    padding-right: 19px;
}
.total-cart-items {
    top: 19px;
     font-size: 15px;
}
 }
`;
};

export const Footer = () => {
  return `
    <div class="footer">

      <div class="footer_main1">

      <div class="footer_1">
        <img src="${footer_img_logo}" class="footer_img_logo">
      </div>

      <div class="footer_2">
        <p class="Touch_text_1">Get in Touch</p>
        <p class="Touch_text">Our story</p>
        <p class="Touch_text">Contact us</p>
        <p class="Touch_text">Find Us Nearby</p>
      </div>

      <div class="footer_3">
        <p class="Policies_text_1">Our Policies</p>
        <p class="Policies_text">Shipping Policy</p>
        <p class="Policies_text">Return Policy</p>
        <p class="Policies_text">Privacy Policy</p>

        <div class="footerlogo_img">
          <img src="${facebook}" class="facebook">
          <img src="${insta}" class="insta">
          <img src="${Linkedin_Icon}" class="Linkedin_Icon">
        </div>
      </div>

      <div class="footer_4">
        <p class="Subscribe_text">Subscribe to our newsletter</p>
        <p class="Subscribe_text_2">subscribe to get notified about product<br> launches, special offers and company news</p>

        <div  class="information_input">Your Email</div>

        <button class="Subscribe_button">Subscribe</button>
      </div>

      </div>
        <p class="COPYRIGHT_text">COPYRIGHT © 2025, Neesh Perfumes Private Limited</p>
    </div>`;
};
export const Footer_css = () => {
  return `

.footer_img_logo{
    width: 220px;
    height: 200px;
}
.footer_main1{
    display: flex;
    justify-content:center;
    gap: 180px;
}

.footer{
    height: 378px;
    background-color: #393939;
    color: #fff;
      padding: 50px 60px;
   
}
.Touch_text{
    font-weight:550;
    font-size: 16px;
    padding: 6px 0px;
    letter-spacing: 0.2px;
    white-space: 2px;
      color: #9c9b9b;
}
.Touch_text_1 ,.Policies_text_1,.Subscribe_text{
    color:#fff;
     font-weight:550;
    font-size: 16px;
    padding: 5px 0px;
    letter-spacing: 0.1px;
    white-space: 2px;
    
}
.Policies_text{
     font-weight:550;
    font-size: 16px;
    padding: 9px 0px;
    letter-spacing: 0.1px;
    white-space: 2px;
    color: #9c9b9b;
}
.Subscribe_text_2{
     font-weight:550;
    font-size: 16px;
    padding: 12px 0px;
    line-height: 23px;
    letter-spacing: 0.1px;
    white-space: 2px;
    color: #9c9b9b;
}
.footerlogo_img{
    margin: 6px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.information_input{
 width:310px;
 border: 1px solid #fff ;
 padding: 14px 10px;
 color: #fff !important;
 background-color:#4e4c3f;
 font-size: 18px;
 height: 48px;
 margin: 10px 0px;
}
.Subscribe_button{
    margin: 10px 0px;
    width: 150px;
    border: transparent;
    background-color: #d8a84e;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    height: 50px;
}
.COPYRIGHT_text{
    text-align: center;
   color: #c5c0c0;
   white-space: 2px;
    margin: 30px 0px;
     font-family:"Minion Pro";
}



html {
  scroll-behavior: smooth;
}

.fas {
  color: #fda901ff;
}

.to-top {
  background: #000;
  position: fixed;
  bottom: 16px;
  right: 32px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #fda901ff !important;
  text-decoration: none;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  z-index: 100;
}

.to-top.active {
  bottom: 32px;
  pointer-events: auto;
  opacity: 1;
}
.to-top::after {
  content: "Back to Top";
  position: absolute;
  bottom: 57px;
  right: -17px;
  background: #fda901ff;
  color: #000;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.to-top:hover::after {
  opacity: 1;
  transform: translateY(0);
}

/*Custom scrollbar*/
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background-color: #000;
}
::-webkit-scrollbar-thumb {
  background-color: #fda901ff;
  border-radius: 10px;
}

.cart_num{
position: absolute;
right: 248px;
top: 57px;
  border-radius: 50%;
  background-color: #fda901ff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  padding: 1px;
  width: 17px;
  height: 17px;
  color: #000;
}

.cart_num.not-charging{
  right: 209px;
  top: 55px;
}
@media(min-width: 481px) and (max-width: 840px){
    .footer_main1 {
    display: flex;
    justify-content: center;
    gap:40px !important;
}
    .footer_img_logo {
    width: 170px;
    height: 170px;
}

.footer {
    height: 370px;
    padding:25px 13px;
}

.information_input {
    width: 228px;
    padding: 13px 10px;
    font-size: 16px;
    height: 48px;
    margin: 10px 0px;
}
    .Policies_text {
    font-size: 15px;
    padding: 6px 0px;
}
.COPYRIGHT_text {
    margin: 13px 0px;
}
  }

  @media (min-width: 841px) and (max-width: 1080px){
  .footer_main1 {
    gap: 50px;
}
    .footer {
    height: 370px;
    padding: 50px 19px;
}
}
@media(max-width: 320px){
.footer_main1 {
    display: flex;
    justify-content: center;
    gap: 7px;
}
    .information_input {
    width: 98px;
    border: 1px solid #fff;
    padding: 9px 10px;
    color: #fff !important;
    background-color: #4e4c3f;
    font-size:10px;
    height: 32px;
    margin: 10px 0px;
}
    .footer_img_logo {
        width: 80px;
        height:79px;
    }
    .Touch_text_1, .Policies_text_1, .Subscribe_text {
    font-size:6px;
    padding: 5px 0px;
}
    .Subscribe_text_2 {
    font-size:6px;
    padding: 12px 0px;
}
    .Policies_text {
    font-size:6px;
    padding:5px 0px;
}
    .Touch_text {
    font-size:6px;
    padding: 6px 0px;
}
 .Linkedin_Icon,.insta,.facebook{
        width: 20px;
    }
.Subscribe_button {
        margin: 10px 0px;
        width: 78px;
        height: 29px;
        font-size: 6px;
    }
.footerlogo_img {
    margin: 6px 0px;
    gap: 3px;
}

    .footer {
        height: 300px;
        background-color: #393939;
        color: #fff;
        padding: 20px 7px;
    }
    .COPYRIGHT_text {
    margin: 18px 0px;
    font-size: 10px;
}


.to-top {
  bottom: 1px;
  right: 32px;
  width:30px;
  height:30px;
   font-size:17px;
}
}

@media(max-width:420px){
.footer_main1 {
    display: flex;
    justify-content: center;
    gap: 7px;
}
    .information_input {
    width: 98px;
    border: 1px solid #fff;
    padding: 9px 10px;
    color: #fff !important;
    background-color: #4e4c3f;
    font-size:10px;
    height: 32px;
    margin: 10px 0px;
}
    .footer_img_logo {
        width: 80px;
        height:79px;
    }
    .Touch_text_1, .Policies_text_1, .Subscribe_text {
    font-size:6px;
    padding: 5px 0px;
}
    .Subscribe_text_2 {
    font-size:6px;
    padding: 12px 0px;
}
    .Policies_text {
    font-size:6px;
    padding:5px 0px;
}
    .Touch_text {
    font-size:6px;
    padding: 6px 0px;
}
 .Linkedin_Icon,.insta,.facebook{
        width: 20px;
    }
.Subscribe_button {
        margin: 10px 0px;
        width: 78px;
        height: 29px;
        font-size: 6px;
    }
.footerlogo_img {
    margin: 6px 0px;
    gap: 3px;
}

    .footer {
        height: 300px;
        background-color: #393939;
        color: #fff;
        padding: 20px 7px;
    }
    .COPYRIGHT_text {
    margin: 18px 0px;
    font-size: 10px;
}


.to-top {
  bottom: 1px;
  right: 32px;
  width:30px;
  height:30px;
   font-size:17px;
}

}
 @media (min-width: 421px) and (max-width:440px){
 .footer_main1 {
    display: flex;
    justify-content: center;
    gap:22px;
}
    .information_input {
    width: 98px;
    border: 1px solid #fff;
    padding: 9px 10px;
    color: #fff !important;
    background-color: #4e4c3f;
    font-size:10px;
    height: 32px;
    margin: 10px 0px;
}
    .footer_img_logo {
        width: 80px;
        height:79px;
    }
    .Touch_text_1, .Policies_text_1, .Subscribe_text {
    font-size:6px;
    padding: 5px 0px;
}
    .Subscribe_text_2 {
    font-size:6px;
    padding: 12px 0px;
}
    .Policies_text {
    font-size:6px;
    padding:5px 0px;
}
    .Touch_text {
    font-size:6px;
    padding: 6px 0px;
}
 .Linkedin_Icon,.insta,.facebook{
        width: 20px;
    }
.Subscribe_button {
        margin: 10px 0px;
        width: 78px;
        height: 29px;
        font-size: 6px;
    }
.footerlogo_img {
    margin: 6px 0px;
    gap: 3px;
}

    .footer {
        height:255px;
        background-color: #393939;
        color: #fff;
        padding: 20px 7px;
    }
    .COPYRIGHT_text {
    margin: 18px 0px;
    font-size: 10px;
}
.to-top {
  bottom: 1px;
  right:30px;
  width:35px;
  height:35px;
   font-size:18px;
}

 }

  @media (min-width:321px) and (max-width:380px){
  .footer_main1 {
    display: flex;
    justify-content: center;
    gap: 7px;
}
    .information_input {
    width: 98px;
    border: 1px solid #fff;
    padding: 9px 10px;
    color: #fff !important;
    background-color: #4e4c3f;
    font-size:10px;
    height: 32px;
    margin: 10px 0px;
}
    .footer_img_logo {
        width: 80px;
        height:79px;
    }
    .Touch_text_1, .Policies_text_1, .Subscribe_text {
    font-size:6px;
    padding: 5px 0px;
}
    .Subscribe_text_2 {
    font-size:6px;
    padding: 12px 0px;
}
    .Policies_text {
    font-size:6px;
    padding:5px 0px;
}
    .Touch_text {
    font-size:6px;
    padding: 6px 0px;
}
 .Linkedin_Icon,.insta,.facebook{
        width: 20px;
    }
.Subscribe_button {
        margin: 10px 0px;
        width: 78px;
        height: 29px;
        font-size: 6px;
    }
.footerlogo_img {
    margin: 6px 0px;
    gap: 3px;
}

    .footer {
        height: 300px;
        background-color: #393939;
        color: #fff;
        padding: 20px 7px;
    }
    .COPYRIGHT_text {
    margin: 18px 0px;
    font-size: 10px;
}
  }
 `;
};
