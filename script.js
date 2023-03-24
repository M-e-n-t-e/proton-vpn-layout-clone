const hamburger = document.querySelector('.hamburger');
const slideList = document.querySelector('.bottom-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    slideList.classList.toggle('active');
})