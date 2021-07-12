// For hamburger-menu and hamburger-menu-exit
const hamburgerBtn = document.getElementById('hamburger-cta');
const nav = document.querySelector('nav');
const hamburgerBtnExit = document.getElementById('hamburger-exit-cta');

if (hamburgerBtn != null && hamburgerBtnExit != null) {
	hamburgerBtn.addEventListener('click', () => {
		nav.classList.add('show-manu');
	});

	hamburgerBtnExit.addEventListener('click', () => {
		nav.classList.remove('show-manu');
	});
}

// For clients slider
$('.clients-slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	dots: false,
	arrow: true,
	autoplay: false,
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

// Jquery for active headings and show videos according to the active heading
$(document).ready(function () {
	$('.heading-one').click(function () {
		$('.heading-one').addClass('active');
		$('.heading-two, .heading-three, .heading-four, .heading-five').removeClass('active');
		$('.tvc').addClass('video-active');
		$('.digital, .documentary, .events, .corporate').removeClass('video-active');
	});

	$('.heading-two').click(function () {
		$('.heading-two').addClass('active');
		$('.heading-one, .heading-three, .heading-four, .heading-five').removeClass('active');
		$('.digital').addClass('video-active');
		$('.tvc, .documentary, .events, .corporate').removeClass('video-active');
	});

	$('.heading-three').click(function () {
		$('.heading-three').addClass('active');
		$('.heading-one, .heading-two, .heading-four, .heading-five').removeClass('active');
		$('.documentary').addClass('video-active');
		$('.tvc, .digital, .events, .corporate').removeClass('video-active');
	});

	$('.heading-four').click(function () {
		$('.heading-four').addClass('active');
		$('.heading-one, .heading-two, .heading-three, .heading-five').removeClass('active');
		$('.events').addClass('video-active');
		$('.tvc, .digital, .documentary, .corporate').removeClass('video-active');
	});

	$('.heading-five').click(function () {
		$('.heading-five').addClass('active');
		$('.heading-one, .heading-two, .heading-three, .heading-four').removeClass('active');
		$('.corporate').addClass('video-active');
		$('.tvc, .digital, .documentary, .events').removeClass('video-active');
	});
});

// To show the hidden embed videos on mouseenter
$(document).ready(function () {
	$(document)
		.on('mouseenter', '.vidcontainer', function () {
			$($(this).data('target')).show();
		})
		.on('mouseleave', '.vidcontainer', function () {
			$($(this).data('target')).hide();
		});
});

// Play YouTube embed videos on mouse horver
function onYouTubeIframeAPIReady() {
	$('div[name="vp"]').each(function () {
		let vid = $(this).attr('videoId');
		let player = new YT.Player(this, {
			videoId: vid,
		});
	});
}

Mouseover = (el) => {
	let yt_object = YT.get(el.id);
	yt_object.playVideo();
};

Mouseout = (el) => {
	let yt_object = YT.get(el.id);
	yt_object.pauseVideo();
};

// Directors
let directors = [
	{
		name: 'Minalee Madanayake',
		image: '/assert/images/directors/img-minalee-madanayake.png',
		instagram: 'https://www.instagram.com/mohamadrawshan/',
		facebook: 'https://www.instagram.com/mohamadrawshan/',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		showreel: 'https://youtu.be/a6xGxx8AJeM',
	},
	{
		name: 'Dulanka Weraduwage',
		image: 'https://i.pinimg.com/originals/98/c2/8d/98c28d7e583ce4f160ccb648e7590998.jpg',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		showreel: 'https://youtu.be/a6xGxx8AJeM',
	},
	{
		name: 'Chrishan Ranjan',
		image: 'https://www.clipartmax.com/png/middle/343-3431341_clip-tag-id-card-employee-id-icon.png',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		showreel: 'https://youtu.be/a6xGxx8AJeM',
	},
	{
		name: 'Cjay Davs',
		image: 'https://www.clipartmax.com/png/middle/343-3431341_clip-tag-id-card-employee-id-icon.png',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		showreel: 'https://youtu.be/a6xGxx8AJeM',
	},
	{
		name: 'Asanka Ratnayake',
		image: 'https://www.clipartmax.com/png/middle/343-3431341_clip-tag-id-card-employee-id-icon.png',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		showreel: 'https://youtu.be/a6xGxx8AJeM',
	},
	{
		name: 'Muditha Bhagya',
		image: 'https://www.clipartmax.com/png/middle/343-3431341_clip-tag-id-card-employee-id-icon.png',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		showreel: 'https://youtu.be/a6xGxx8AJeM',
	},
];

directors.forEach(function (director) {
	//Create directors name list
	let directorsNameList = document.createElement('ul');
	let li = document.createElement('li');
	li.textContent = director.name;
	directorsNameList.appendChild(li);
	document.getElementById('directors-name').appendChild(directorsNameList);
	//When the director name was clicked
	li.addEventListener('click', function () {
		//Underline the director name

		//Hide the VMLK logo
		let dPLogo = document.getElementById('hide-element');
		dPLogo.classList.add('hide');

		//Director image
		let directorImage = document.getElementById('director-image');
		directorImage.src = director.image; //Director image is hidden until the  user click the director
		directorImage.classList.remove('hide');

		//Instagram and Facebook icon
		let instagram = document.getElementById('director-instagram');
		instagram.href = director.instagram;
		console.log(instagram.href);

		let facebook = document.getElementById('director-facebook');
		facebook.href = director.facebook;
		console.log(facebook.href);

		let socialIcon = document.getElementById('director-social-icon');
		socialIcon.classList.remove('hide');
		//Director body text
		let bodyText = document.getElementById('director-body-text');
		bodyText.textContent = director.bodyText;
	});
});

// function myFunction() {
// 	directors.forEach(function (director) {
// 		//Create director image
// 		let directorImage = document.createElement('img');
// 		directorImage.src = director.image;
// 		document.getElementById('director-image').appendChild(directorImage);

// 		//Create director body text
// 		let bodyText = document.createElement('p');
// 		bodyText.textContent = director.bodyText;
// 		document.getElementById('director-body-text').appendChild(bodyText);
// 	});
// }
