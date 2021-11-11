const tooglesEl = document.querySelectorAll('.toogle');
const goodEl = document.querySelector('#good');
const cheapEl = document.querySelector('#cheap');
const fastEl = document.querySelector('#fast');

tooglesEl.forEach(toogle => {
    toogle.addEventListener('change', (e) => doTheTrick(e.target));
})

function doTheTrick(theClickedOne) {
    if (goodEl.checked && cheapEl.checked && fastEl.checked) {
        if (goodEl === theClickedOne) {
            fastEl.checked = false;
        } else if(cheapEl === theClickedOne) {
            goodEl.checked = false;
        } else if (fastEl === theClickedOne) {
            cheapEl.checked = false;
        }
    }
}