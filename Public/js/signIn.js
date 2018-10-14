var login = document.getElementById("submit");
	login.addEventListener("click", verify);

	function verify() {
		var email = document.getElementById("emailId").value;
		var password = document.getElementById("mypassword").value;
		var errorMessageTwo = document.getElementById("emailerror");
		var errorMessageThree = document.getElementById("passworderror");
		var input = document.querySelectorAll(".groupfields input");


		if (email.length == " " && password.length == " ") {
			errorMessageTwo.innerHTML = "Email  field cannot be left blank.";
			errorMessageThree.innerHTML = "Password field cannot be left blank.";
			for (var i = 0; i < input.length; i++) {
				input[i].style.border = "2px solid red";
			}
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