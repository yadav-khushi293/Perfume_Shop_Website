const validateUserForm = async (e) => {
  e.preventDefault();

  let email = document.getElementById("user_email").value.trim();
  let password = document.getElementById("user_pass").value.trim();

  // Email validation
  if (email === "") {
    document.getElementById("user_email_msg").innerText =
      "Please enter your email";
    return;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("user_email_msg").innerText =
      "Invalid email format";
    return;
  } else {
    document.getElementById("user_email_msg").innerText = "";
  }

  // Password validation
  if (password === "") {
    document.getElementById("user_pass_msg").innerText =
      "Please enter your password";
    return;
  } else if (password.length < 6 || password.length > 20) {
    document.getElementById("user_pass_msg").innerText =
      "Password must be 6–20 characters";
    return;
  } else {
    document.getElementById("user_pass_msg").innerText = "";
  }

  const apiLogin = 'https://khushi-uedn.onrender.com/Cart';

  try {
    let res = await fetch(apiLogin);
    let users = await res.json();

    let foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      sessionStorage.setItem("token", foundUser.id);//data store in sessionstoreges
      alert("Login Successful");
      window.location.href = "../Index.html";
    } else {
      alert("Invalid email or password");
    }
  } catch (error) {
    console.log(error);
    alert("Server error. Try again later");
  }
};
