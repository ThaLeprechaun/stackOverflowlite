var deleted = document.getElementById("delete");
var content = document.getElementById("content");
deleted.addEventListener("click", deletePost);
function deletePost() {
	content.style.display = "none";
}