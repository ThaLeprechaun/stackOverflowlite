const login = document.getElementById("submit");

function verify() {
  const email = document.getElementById("emailId").value;
  const password = document.getElementById("mypassword").value;
  const errorMessageTwo = document.getElementById("emailerror");
  const errorMessageThree = document.getElementById("passworderror");
  const input = document.querySelectorAll(".groupfields input");
  if (email.length === " " && password.length === " ") {
    errorMessageTwo.innerHTML = "Email  field cannot be left blank.";
    errorMessageThree.innerHTML = "Password field cannot be left blank.";
    for (let i = 0; i < input.length; i += 1) {
      input[i].style.border = "2px solid red";
    }
    return false;
  }
  if (email.length === "") {
    errorMessageTwo.innerHTML = "Email field cannot be left blank.";
    input[1].style.border = "2px solid red";
    return false;
  }
  if (password.length === "") {
    errorMessageThree.innerHTML = "Password field cannot be left blank.";
    input[2].style.border = "2px solid red";
    return false;
  }
  if (password.length < 6) {
    errorMessageThree.innerHTML = "Password must be at least 6 characters long.";
    input[2].style.border = "2px solid red";
    return false;
  }
  return true;
}

login.addEventListener("click", verify);
const checkbox = document.getElementById("check");
function showPassword() {
  const checkPassword = document.getElementById("mypassword");
  if (checkPassword.type === "password") {
    checkPassword.type = "text";
  } else {
    checkPassword.type = "password";
  }
}
checkbox.addEventListener("click", showPassword);
