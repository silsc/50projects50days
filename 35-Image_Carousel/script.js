const leftEl = document.getElementById('left');
const rightEl = document.getElementById('right');
const imgsEl = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if(idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1
  }

  imgsEl.style.transform = `translateX(${-idx*500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000)
}

rightEl.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
})

leftEl.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
})