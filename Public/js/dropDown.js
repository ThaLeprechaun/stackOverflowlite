const dropdown = document.getElementById("dropOption");
function dropDown() {
  document.getElementById("dropdown").classList.toggle("output");
}
dropdown.addEventListener("click", dropDown);
