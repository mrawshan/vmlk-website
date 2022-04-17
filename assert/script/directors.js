'use strict';

const directors = [
	{
		name: 'Anna Fazi',
		image: 'assert/images/directors/img-anna-fazi.jpg',
		instagram: 'https://www.instagram.com/mohamadrawshan/',
		facebook: 'https://www.instagram.com/mohamadrawshan/',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		thumbnail: ['assert/images/img-feature-video1.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video5.jpeg'],
		showreel: ['assert/videos/vid-feature-video1.mp4', 'assert/videos/vid-feature-video2.mp4', 'assert/videos/vid-feature-video3.mp4', 'assert/videos/vid-feature-video4.mp4', 'assert/videos/vid-feature-video5.mp4'],
	},
	{
		name: 'Jhone Worker',
		image: 'assert/images/directors/img-jhone-worker.jpg',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		thumbnail: ['assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video1.jpeg'],
		showreel: ['assert/videos/vid-feature-video5.mp4', 'assert/videos/vid-feature-video4.mp4', 'assert/videos/vid-feature-video3.mp4', 'assert/videos/vid-feature-video2.mp4', 'assert/videos/vid-feature-video1.mp4'],
	},
	{
		name: 'Sheeza Zoha',
		image: 'assert/images/directors/img-sheeza-zoha.jpg',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		thumbnail: ['assert/images/img-feature-video1.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video5.jpeg'],
		showreel: ['assert/videos/vid-feature-video1.mp4', 'assert/videos/vid-feature-video2.mp4', 'assert/videos/vid-feature-video3.mp4', 'assert/videos/vid-feature-video4.mp4', 'assert/videos/vid-feature-video5.mp4'],
	},
	{
		name: 'Peater Paull',
		image: 'assert/images/directors/img-peater-paull.jpg',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		thumbnail: ['assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video1.jpeg'],
		showreel: ['assert/videos/vid-feature-video5.mp4', 'assert/videos/vid-feature-video4.mp4', 'assert/videos/vid-feature-video3.mp4', 'assert/videos/vid-feature-video2.mp4', 'assert/videos/vid-feature-video1.mp4'],
	},
	{
		name: 'Huston Wilson',
		image: 'assert/images/directors/img-huston-wilson.jpg',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		thumbnail: ['assert/images/img-feature-video1.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video5.jpeg'],
		showreel: ['assert/videos/vid-feature-video1.mp4', 'assert/videos/vid-feature-video2.mp4', 'assert/videos/vid-feature-video3.mp4', 'assert/videos/vid-feature-video4.mp4', 'assert/videos/vid-feature-video5.mp4'],
	},
	{
		name: 'Joseph Gonzalez',
		image: 'assert/images/directors/img-joseph-gonzalez.jpg',
		instagram: '#',
		facebook: '#',
		bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis fugiat',
		thumbnail: ['assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video1.jpeg'],
		showreel: ['assert/videos/vid-feature-video5.mp4', 'assert/videos/vid-feature-video4.mp4', 'assert/videos/vid-feature-video3.mp4', 'assert/videos/vid-feature-video2.mp4', 'assert/videos/vid-feature-video1.mp4'],
	},
];

//---- Create directors ----//
const directorsNameDiv = document.querySelector('#directors-name ul');
const logo = document.querySelector('.wrapper-logo');
const directorsWorkWrapper = document.querySelector('.directors-work-wrapper');

const createDirectors = function (directors) {
	// Making empty the directorsWorkWrapper
	directorsWorkWrapper.innerHTML = '';

	// Loop on the directors array
	directors.forEach(function (director, i) {
		// Create Directors name list
		const directorsName = `
      <li class="name" data-number="${i}">${director.name}</li>
   	`;

		directorsNameDiv.insertAdjacentHTML('beforeend', directorsName);

		// Create directors work
		let directorsWork = '';

		directorsWork += `<div class="work-container work-${i} work-hidden">
			<div class="image-box">
				<img src="${director.image}" alt="" />
			</div>

			<div class="social-icon-wrapper">
				<a href="${director.instagram}"><i class="fab fa-instagram fa-3x"></i></a>
				<a href="${director.instagram}"><i class="fab fa-facebook-square fa-3x"></i></a>
			</div>

			<div class="text-box">
				<p class="director-body-text">${director.bodyText}</p>
			</div>

			<div class="director-showreel">
				<img src="${director.thumbnail[0]}" alt="">
				<video controls>
					<source src="${director.showreel[0]}" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>`;

		directorsWork += `<div class="director-work">`;
		// 2nd loop (Here we used the slice method on the director.showreel to remove the first element to reduce the array length) Because we used the first element for above html code
		director.showreel.slice(1).forEach(function (_, i) {
			directorsWork += `
			<div class="vid-container">
				<img src="${director.thumbnail[i + 1]}" alt="">
				<video controls>
					<source src="${director.showreel[i + 1]}" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
				`;
		});
		directorsWork += `</div>`;

		directorsWork += `</div>`;

		directorsWorkWrapper.insertAdjacentHTML('beforeend', directorsWork);
	});
};
createDirectors(directors);

//---- Click event on the directors ----//
const directorsName = document.querySelectorAll('.name');
const directorsWork = document.querySelectorAll('.work-container');

directorsNameDiv.addEventListener('click', function (e) {
	const clickedEl = e.target.closest('.name');
	const index = clickedEl.dataset.number;

	// Hide the logo
	logo.classList.add('hide');

	// Remove underline for all directors and hide all work container
	directorsName.forEach((name) => name.classList.remove('active'));
	directorsWork.forEach((work) => {
		work.classList.add('work-hidden');
		work.style.visibility = 'visible';
	});

	// Undrline the clicked director
	clickedEl.classList.add('active');

	// Show the work container
	document.querySelector(`.work-${index}`).classList.remove('work-hidden');

	// Scroll into view
	// Get coordinates of the workContainer
	const workContainer = document.querySelector(`.work-${index}`);
	const wcoords = workContainer.getBoundingClientRect();

	const scroll = function () {
		directorsWorkWrapper.scrollTo({
			top: wcoords.top + directorsWorkWrapper.pageYOffset, // Current position + Current scroll
			behavior: 'smooth',
		});
	};

	setTimeout(scroll, 2000);
});

//---- Click event on the director showreel ----//
const directorShowreel = document.querySelectorAll('.director-showreel video');

directorShowreel.forEach(function (video) {
	video.addEventListener('play', function (e) {
		const img = e.target.previousElementSibling;
		if (e.type === 'play') {
			img.classList.add('hide');
		}
	});
});

//---- Play video on mouseover ----//
const playVideo = function (e, opacity) {
	if (e.target.closest('.director-work') && e.target.hasAttribute('controls')) {
		const curentVideo = e.target;

		e.type === 'mouseover' ? curentVideo.play() : curentVideo.pause();

		const currentImg = curentVideo.previousElementSibling;
		currentImg.style.opacity = this;
	}
};

directorsWorkWrapper.addEventListener('mouseover', playVideo.bind('0'));
directorsWorkWrapper.addEventListener('mouseout', playVideo.bind('1'));
