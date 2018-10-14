var plus = document.getElementById("plus");
	var minus = document.getElementById("minus");
	var count = document.getElementById("votecount");
	var counter = 0;

	plus.addEventListener("click", function () {
		counter++;
		count.innerHTML = counter;
	});

	minus.addEventListener("click", function () {
		counter--;
		count.innerHTML = counter;
	});

	//Accepting answer
	var heart = document.getElementById("heart");
	var like = document.getElementById("like");

	heart.addEventListener("click", function () {
		like.innerHTML = "Accepted";
		like.style.color = "green";
	});