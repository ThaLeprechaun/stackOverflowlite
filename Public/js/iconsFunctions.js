const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("votecount");
let counter = 0;

plus.addEventListener("click", () => {
  counter += 1;
  count.innerHTML = counter;
});

minus.addEventListener("click", () => {
  counter -= 1;
  count.innerHTML = counter;
});

// Accepting answer
const heart = document.getElementById("heart");
const like = document.getElementById("like");

heart.addEventListener("click", () => {
  like.innerHTML = "Accepted";
  like.style.color = "green";
});
