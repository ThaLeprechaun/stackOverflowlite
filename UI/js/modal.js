
	let viewModal = document.getElementById("modal");
	let modalButton = document.getElementById("newpost");
	let closeModal = document.getElementById("close");

	modalButton.addEventListener("click", function () {
		viewModal.style.display = "block";
	});
	closeModal.addEventListener("click", function () {
		viewModal.style.display = "none";
	});
	window.onclick = function (e) {
		if (e.target == viewModal) {
			viewModal.style.display = "none";
		}
	}