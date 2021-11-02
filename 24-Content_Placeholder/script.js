const headerEl = document.getElementById('header');
const titleEl = document.getElementById('title');
const excerptEl = document.getElementById('excerpt');
const profileImgEl = document.getElementById('profile_img');
const nameEl = document.getElementById('name');
const dateEl = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000)

function getData() {
    headerEl.innerHTML = '<img src="https://source.unsplash.com/random" alt="">';
    titleEl.innerHTML = 'Lorem ipsum dolor sit amet';
    excerptEl.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quia';
    profileImgEl.innerHTML = '<img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />';
    nameEl.innerHTML = 'John Doe';
    dateEl.innerHTML = 'Oct 08, 2020';
    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
}