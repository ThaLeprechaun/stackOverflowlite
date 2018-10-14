const deleted = document.getElementById("delete");
const content = document.getElementById("content");
function deletePost() {
  content.style.display = "none";
}
deleted.addEventListener("click", deletePost);
