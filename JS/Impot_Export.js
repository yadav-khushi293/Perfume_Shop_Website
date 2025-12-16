export const Navbar = () => {
  return `
      <nav>
        <p class="headre">FESTIVE SEASON SALE | FLAT 15% OFF | NO CODE NEEDED*</p>
    </nav>

    <div  class="parenst">
         <div class="header_1">

            <div class="header_child_1">
                <img src="./Utiles/download (1).png" class="memu_img">
                <p class="menu">Menu</p>
            </div>

            <div class="header_child_1">
                <img src="./Utiles/download (2).png" class="serch_img">
                <p class="se
                
                ch">Search</p>
            </div>

         </div>

        <div class="header_2">
            <img src="./Utiles/neesh_logo.webp" class="neesh_logo">
        </div>

        <div class="header_3">
            <img src="./Utiles/download.jpeg" class="user_login">
            <img src="./Utiles/shopping-bag.svg" class="Add_card">
        </div>
    </div>
    `;
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
.user_login{
    width:30px;
    height: 32px;
}
.Add_card{
    width: 40px;
    height:40px;
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
    padding: 0px 40px;
    /* margin-bottom:20px; */
    height: 80px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.neesh_logo{
   
    padding: 20px 0px;
    padding-right: 180px;
}
`;
};

export const Footer=()=>{
    return`
    <div class="footer">

      <div class="footer_main1">

      <div class="footer_1">
        <img src="https://cdn.shopify.com/s/files/1/2806/3100/files/crest-new-logo.png?v=1743594000" class="footer_img_logo">
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
          <img src="./Utiles/fecbook.webp" class="facebook">
          <img src="./Utiles/insta.webp" class="insta">
          <img src="./Utiles/Linkedin_Icon.webp" class="Linkedin_Icon">
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
    </div>`
}
export const Footer_css=()=>{

    return`

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
    `
}

