// For hamburger-menu and hamburger-menu-exit
// const hamburgerBtn = document.getElementById('hamburger-cta');
// const nav = document.querySelector('nav');
// const hamburgerBtnExit = document.getElementById('hamburger-exit-cta');

// hamburgerBtn.addEventListener('click', () => {
// 	nav.classList.add('show-manu');
// });

// hamburgerBtnExit.addEventListener('click', () => {
// 	nav.classList.remove('show-manu');
// });

$(document).ready(function () {
	$('#hamburger-cta').click(function () {
		$('nav').addClass('show-manu');
	});

	$('#hamburger-exit-cta').click(function () {
		$('nav').removeClass('show-manu');
	});
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

// Jquery for active headings
// $(document).ready(function () {
// 	// First active heading
// 	$('.heading-one').click(function () {
// 		$('.bottom-line').addClass('bottom-active1');
// 		$('.bottom-line').removeClass('bottom-active2 bottom-active3 bottom-active4 bottom-active5');
// 	});

// 	// Second active heading
// 	$('.heading-two').click(function () {
// 		$('.bottom-line').addClass('bottom-active2');
// 		$('.bottom-line').removeClass('bottom-active1 bottom-active3 bottom-active4 bottom-active5');
// 	});

// 	// Third active heading
// 	$('.heading-three').click(function () {
// 		$('.bottom-line').addClass('bottom-active3');
// 		$('.bottom-line').removeClass('bottom-active1 bottom-active2 bottom-active4 bottom-active5');
// 	});

// 	// Fourth active heading
// 	$('.heading-four').click(function () {
// 		$('.bottom-line').addClass('bottom-active4');
// 		$('.bottom-line').removeClass('bottom-active1 bottom-active2 bottom-active3 bottom-active5');
// 	});

// 	// Fifth active heading
// 	$('.heading-five').click(function () {
// 		$('.bottom-line').addClass('bottom-active5');
// 		$('.bottom-line').removeClass('bottom-active1 bottom-active2 bottom-active3 bottom-active4');
// 	});
// });

$(document).ready(function () {
	$('.heading-one').click(function () {
		$('.heading-one').addClass('active');
		$('.heading-two, .heading-three, .heading-four, .heading-five').removeClass('active');
	});

	$('.heading-two').click(function () {
		$('.heading-two').addClass('active');
		$('.heading-one, .heading-three, .heading-four, .heading-five').removeClass('active');
	});

	$('.heading-three').click(function () {
		$('.heading-three').addClass('active');
		$('.heading-one, .heading-two, .heading-four, .heading-five').removeClass('active');
	});

	$('.heading-four').click(function () {
		$('.heading-four').addClass('active');
		$('.heading-one, .heading-two, .heading-three, .heading-five').removeClass('active');
	});

	$('.heading-five').click(function () {
		$('.heading-five').addClass('active');
		$('.heading-one, .heading-two, .heading-three, .heading-four').removeClass('active');
	});
});
