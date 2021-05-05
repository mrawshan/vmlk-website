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

// Jquery for active headings
$(document).ready(function () {
	// First active heading
	$('.heading-one').click(function () {
		$('.bottom-line').addClass('bottom-active');
		$('.bottom-line').removeClass('bottom-active1 bottom-active2 bottom-active3 bottom-active4');
	});

	// Second active heading
	$('.heading-two').click(function () {
		$('.bottom-line').addClass('bottom-active1');
		$('.bottom-line').removeClass('bottom-active bottom-active2 bottom-active3 bottom-active4');
	});

	// Third active heading
	$('.heading-three').click(function () {
		$('.bottom-line').addClass('bottom-active2');
		$('.bottom-line').removeClass('bottom-active bottom-active1 bottom-active3 bottom-active4');
	});

	// Fourth active heading
	$('.heading-four').click(function () {
		$('.bottom-line').addClass('bottom-active3');
		$('.bottom-line').removeClass('bottom-active bottom-active1 bottom-active2 bottom-active4');
	});

	// Fifth active heading
	$('.heading-five').click(function () {
		$('.bottom-line').addClass('bottom-active4');
		$('.bottom-line').removeClass('bottom-active bottom-active1 bottom-active2 bottom-active3');
	});
});
