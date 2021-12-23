const contentsEL = document.querySelectorAll('.content');
const navItemsEL = document.querySelectorAll('li');



navItemsEL.forEach((navItem, idx) => {
  navItem.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();
    navItem.classList.add('active');
    contentsEL[idx].classList.add('show');
  })
})

function hideAllContents() {
  contentsEL.forEach((content) => {
    content.classList.remove('show');
  })
}

function hideAllItems() {
  navItemsEL.forEach((navItem) => {
    navItem.classList.remove('active');
  })
}