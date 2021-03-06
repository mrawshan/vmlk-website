'use strict';

//---- For open and closs navigation ----//
const nav = document.querySelector('nav');
const openNav = document.querySelector('.open-navigation');
const clossNav = document.querySelector('.closs-navigation');
const navLink = document.querySelector('.nav-link');
const navItem = document.querySelectorAll('.link');

// Open navigation
const openNavigation = function () {
	nav.style.height = '100vh';
	openNav.classList.add('hide');
	clossNav.classList.remove('hide');
	navLink.classList.remove('hide');
};

// Closs navigation
const clossNavigation = function () {
	nav.style.height = '0vh';
	clossNav.classList.add('hide');
	openNav.classList.remove('hide');
	navLink.classList.add('hide');
};

// Animation on
const animationOn = function () {
	navItem.forEach((item, i) => {
		i++;
		const index = i;
		item.classList.add(`link${index}`);
	});
};

// Animation off
const animationOff = function () {
	navItem.forEach((item, i) => {
		i++;
		const index = i;
		item.classList.remove(`link${index}`);
	});
};

// Event handlers
openNav.addEventListener('click', () => {
	openNavigation();
	animationOn();
});

clossNav.addEventListener('click', () => {
	clossNavigation();
	animationOff();
});

//---- Reveal feature-video row ----//
const allVideos = document.querySelectorAll('.feature-video .row');

// Callback function
const revealvideo = function (entries, observer) {
	const [entry] = entries; // Destructuring entries Array

	if (!entry.isIntersecting) return;
	entry.target.classList.remove('row--hidden');

	// Remove the row--hidden class on the 2nd and 3rd row's in small screen's
	let mql = window.matchMedia('(max-width: 768px)'); // Here we are using matchMedia method to read the screen size
	console.log(mql);

	const secondRow = () => allVideos[1].classList.remove('row--hidden');
	const thirdRow = () => allVideos[2].classList.remove('row--hidden');

	if (mql.matches) {
		const secondRowTimer = setTimeout(secondRow, 1100);
		const thirdRowTimer = setTimeout(thirdRow, 1200);
	}

	observer.unobserve(entry.target); // Unobserve the sections (Stop observing)
};

// Intersection observer API
const videosObserver = new IntersectionObserver(revealvideo, {
	root: null,
	threshold: 0.15,
});

allVideos.forEach(function (video) {
	videosObserver.observe(video);
	video.classList.add('row--hidden'); // Adding row--hidden class to all the sections
});
