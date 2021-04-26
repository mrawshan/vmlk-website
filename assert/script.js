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

// For clients slider
$('.clients-slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrow: true,
	autoplay: true,
	autoplaSpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
