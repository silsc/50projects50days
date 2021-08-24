const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  update();
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  update();
});

function update() {
  if (container.classList.contains("show-nav")) {
    container.style.position = "fixed";
    container.style.width = "100%";
  } else {
    container.style.position = "relative";
  }
}
