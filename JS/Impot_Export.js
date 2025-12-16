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
