// Example functionality for Like and Comment buttons
document.querySelectorAll(".like-btn").forEach((button) => {
  button.addEventListener("click", function () {
    this.innerHTML = this.innerHTML === "❤️ Like" ? "❤️ Liked" : "❤️ Like";
  });
});

document.querySelectorAll(".comment-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Comment section coming soon!");
  });
});
