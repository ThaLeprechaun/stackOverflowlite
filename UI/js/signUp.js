var signUp = document.getElementById("submit");
	signUp.addEventListener("click", verify);

	function verify() {
		var username = document.getElementById("username").value;
		var email = document.getElementById("emailId").value;
		var password = document.getElementById("mypassword").value;
		var errorMessageOne = document.getElementById("usererror");
		var errorMessageTwo = document.getElementById("emailerror");
		var errorMessageThree = document.getElementById("passworderror");
		var input = document.querySelectorAll(".groupfields input");


		if (username.length == " " && email.length == " " && password.length == " ") {
			errorMessageOne.innerHTML = "Username field cannot be left blank.";
			errorMessageTwo.innerHTML = "Email  field cannot be left blank.";
			errorMessageThree.innerHTML = "Password field cannot be left blank.";
			for (var i = 0; i < input.length; i++) {
				input[i].style.border = "2px solid red";
			}
			return false;
		}
		if (username.length == "") {
			errorMessageOne.innerHTML = "Username field cannot be left blank.";
			input[0].style.border = "2px solid red";
			return false;
		}
		if (email.length == "") {
			errorMessageTwo.innerHTML = "Email field cannot be left blank.";
			input[1].style.border = "2px solid red";
			return false;
		}
		if (password.length == "") {
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
//Show Password
	var checkbox = document.getElementById("check");
	checkbox.addEventListener("click", showPassword);
	function showPassword() {
		var checkPassword = document.getElementById("mypassword");
		if(checkPassword.type === "password"){
			checkPassword.type = "text";
		}
		else{
			checkPassword.type = "password";
		}
	}