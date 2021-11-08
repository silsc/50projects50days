const loveMeEl = document.querySelector('.love-me');const timesEl = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0;

loveMeEl.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInsideImage = x - leftOffset;
    const yInsideImage = y - topOffset;

    heart.style.top = `${yInsideImage}px`;
    heart.style.left = `${xInsideImage}px`;
    loveMeEl.appendChild(heart);

    timesEl.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000)
}