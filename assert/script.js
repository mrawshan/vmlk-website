// For hamburger-menu and hamburger-menu-exit
const hamburgerBtn = document.getElementById('hamburger-cta');
const nav = document.querySelector('nav');
const hamburgerBtnExit = document.getElementById('hamburger-exit-cta');

hamburgerBtn.addEventListener('click', () => {
	nav.classList.add('show-manu');
});

hamburgerBtnExit.addEventListener('click', () => {
	nav.classList.remove('show-manu');
});
