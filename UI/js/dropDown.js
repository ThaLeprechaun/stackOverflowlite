var dropdown = document.getElementById("dropOption");
dropdown.addEventListener("click", dropDown);
	
function dropDown() {
	document.getElementById("dropdown").classList.toggle("output");
}