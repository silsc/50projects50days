const sliderContainerEl = document.querySelector('.slider-container');
const slideRightEl = document.querySelector('.right-slide');
const slideLeftEl = document.querySelector('.left-slide');
const downButtonEl = document.querySelector('.down-button');
const upButtonEl = document.querySelector('.up-button');
const slidesLength = slideRightEl.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeftEl.style.top = `-${(slidesLength - 1) * 100}vh`

upButtonEl.addEventListener('click', () => changeSlide('up'))

downButtonEl.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainerEl.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }
    slideRightEl.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeftEl.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}