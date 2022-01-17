const boxesEl = document.getElementById('boxes');
const btnEl = document.getElementById('btn');

function createBoxes() {
  for(let i = 0; i < 4; i++ ) {
    for(let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxesEl.appendChild(box);
    }
  }
}

createBoxes()

btnEl.addEventListener('click', () => {
  boxesEl.classList.toggle('big');
})