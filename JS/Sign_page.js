const myform = async (e) => {
  e.preventDefault();
  let userName = document.getElementById("user").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirmPassword = document.getElementById("confpass").value;

 const apiLogin = 'https://khushi-uedn.onrender.com/Cart'

  if (userName == "") {

    document.getElementById("username_msg").innerHTML ="**** Please fill the userName field";return false;

  } else if (userName.length <= 2 || userName.length > 20) {
    
    document.getElementById("username_msg").innerHTML =
      "** Please enter the length between 2 to 20";
    return false;
  } else if (!isNaN("userName")) {
    document.getElementById("username_msg").innerHTML =
      "**Only characters are allowed ";
    return false;
  } else {
    document.getElementById("username_msg").innerHTML = "";
  }

  //email validation

  if (email == "") {
    document.getElementById("email_msg").innerHTML =
      " ** Please fill the email field";
    return false;
  } else if (email.indexOf("@") <= 0) {
    document.getElementById("email_msg").innerHTML = " ** @ Invalid Position.";
    return false;
  } else if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email_msg").innerHTML = " **  Invalid Position.";
    return false;
  } else {
    document.getElementById("email_msg").innerHTML = "";
  }

  //Pass Validation

  if (password == "") {
    document.getElementById("pass_msg").innerHTML =
      " ** Please fill the password field";
    return false;
  } else if (password.length <= 5 || password.length > 20) {
    document.getElementById("pass_msg").innerHTML =
      " ** Please enter the length between 5 to 20";
    return false;
  } else if (password != confirmPassword) {
    document.getElementById("confpass_msg").innerHTML =
      " ** Password Not Matched";
    return false;
  } else {
    document.getElementById("pass_msg").innerHTML = "";
  }

  //confirPass Validation

  if (confirmPassword == "") {
    document.getElementById("confpass_msg").innerHTML =
      " ** Please fill the confirmPassword field";
    return false;
  } else {
    document.getElementById("confpass_msg").innerHTML = "";
  }


// data code data 
  let userData = {
    userName: userName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };


try {
        let res = await fetch( apiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        let data = await res.json();

      if (data) {
    alert("Registration Successful");
    window.location = 'Login_page.html';
}


    } catch (error) {
        console.log('🚀 ~ error:', error);
    }

}