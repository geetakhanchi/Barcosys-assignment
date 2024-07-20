document.getElementById("coin").addEventListener("click", function () {
  this.classList.add("spinning");
  setTimeout(() => {
    this.classList.remove("spinning");
  }, 5000);
});
