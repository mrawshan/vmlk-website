'use strict';

// Our work
const ourWork = [
	{
		name: 'tvc',
		image: ['assert/images/img-feature-video1.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video6.jpeg'],
		video: ['./assert/videos/vid-feature-video1.mp4', './assert/videos/vid-feature-video2.mp4', './assert/videos/vid-feature-video3.mp4', './assert/videos/vid-feature-video4.mp4', './assert/videos/vid-feature-video5.mp4', './assert/videos/vid-feature-video6.mp4'],
	},

	{
		name: 'digital',
		image: ['assert/images/img-feature-video6.jpeg', 'assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video1.jpeg'],

		video: ['./assert/videos/vid-feature-video6.mp4', './assert/videos/vid-feature-video5.mp4', './assert/videos/vid-feature-video4.mp4', './assert/videos/vid-feature-video3.mp4', './assert/videos/vid-feature-video2.mp4', './assert/videos/vid-feature-video1.mp4'],
	},

	{
		name: 'documentary',
		image: ['assert/images/img-feature-video1.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video6.jpeg'],

		video: ['./assert/videos/vid-feature-video1.mp4', './assert/videos/vid-feature-video2.mp4', './assert/videos/vid-feature-video3.mp4', './assert/videos/vid-feature-video4.mp4', './assert/videos/vid-feature-video5.mp4', './assert/videos/vid-feature-video6.mp4'],
	},

	{
		name: 'events',
		image: ['assert/images/img-feature-video6.jpeg', 'assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video1.jpeg'],

		video: ['./assert/videos/vid-feature-video6.mp4', './assert/videos/vid-feature-video5.mp4', './assert/videos/vid-feature-video4.mp4', './assert/videos/vid-feature-video3.mp4', './assert/videos/vid-feature-video2.mp4', './assert/videos/vid-feature-video1.mp4'],
	},

	{
		name: 'corporate',
		image: ['assert/images/img-feature-video1.jpeg', 'assert/images/img-feature-video2.jpeg', 'assert/images/img-feature-video3.jpeg', 'assert/images/img-feature-video4.jpeg', 'assert/images/img-feature-video5.jpeg', 'assert/images/img-feature-video6.jpeg'],
		video: ['./assert/videos/vid-feature-video1.mp4', './assert/videos/vid-feature-video2.mp4', './assert/videos/vid-feature-video3.mp4', './assert/videos/vid-feature-video4.mp4', './assert/videos/vid-feature-video5.mp4', './assert/videos/vid-feature-video6.mp4'],
	},
];

//---- Create our work ----//
const ourWorkVideoContainer = document.querySelector('.our-work-video-wrapper');

// CreateOurWork function (Method 01)
const createOurWork = function (works) {
	// Making empty the ourWorkVideoContainer
	ourWorkVideoContainer.innerHTML = '';

	// 1st loop on the ourWork array
	works.forEach(function (work) {
		// Create html elements
		let html = '';

		html += `<div class="vid-wrapper ${work.name} ${work.name === 'tvc' ? 'video-active' : ''}">`;

		// 2nd loop to get the index
		work.image.forEach(function (_, i) {
			html += `
         <div class="vid-container">
            <img src="${work.image[i]}" alt="">
            <video controls>
               <source src="${work.video[i]}" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>`;
		});

		html += `</div>`;

		ourWorkVideoContainer.insertAdjacentHTML('beforeend', html);
	});
};
createOurWork(ourWork);

/*
// CreateOurWork function (Method 02 "Using map method")
const createOurWork = function (works) {
	// Making empty the ourWorkVideoContainer
	ourWorkVideoContainer.innerHTML = '';

	// 1st loop on the ourWork array
	works.forEach(function (work) {
		console.log(work);

		// Create html elements
		const html = `
         <div class="vid-wrapper ${work.name} ${work.name === 'tvc' ? 'video-active' : ''}">

            ${work.image // 2nd loop on the work.image to access the index
					.map(function (_, i) {
						return `
                  <div class="vid-container">
                     <img src="${work.image[i]}" alt="">
                     <video controls>
                        <source src="${work.video[i]}" type="video/mp4" />
                        Your browser does not support the video tag.
                     </video>
                  </div> `;
					})
					.join('')}
         </div>
         `;
		ourWorkVideoContainer.insertAdjacentHTML('beforeend', html);
	});
};
createOurWork(ourWork);
*/

//---- Play video on hover ----//
// ourWorkVideoContainer.addEventListener('mouseover', function (e) {
// 	if (e.target.hasAttribute('controls')) {
// 		const curentVideo = e.target;
// 		console.log(curentVideo);

// 		curentVideo.play();

// 		const currentImg = curentVideo.previousElementSibling;
// 		console.log(currentImg);

// 		currentImg.style.width = '0%';
// 	}
// });

//---- Play video on mouseover ----//
const playVideo = function (e, opacity) {
	if (e.target.hasAttribute('controls')) {
		const curentVideo = e.target;

		e.type === 'mouseover' ? curentVideo.play() : curentVideo.pause();

		const currentImg = curentVideo.previousElementSibling;
		currentImg.style.opacity = this;
	}
};

ourWorkVideoContainer.addEventListener('mouseover', playVideo.bind('0'));
ourWorkVideoContainer.addEventListener('mouseout', playVideo.bind('1'));

//---- Show heading related videos ----//
const headingWrapper = document.querySelector('.heading-wrapper');
const headings = document.querySelectorAll('.heading');
const vidWrappers = document.querySelectorAll('.vid-wrapper');

headingWrapper.addEventListener('click', function (e) {
	const clicked = e.target.closest('.link-item'); // Getting the clicked item

	if (!clicked) return;

	// Remove the active classes for headings and vid-wrapper
	headings.forEach((heading) => heading.classList.remove('active'));
	vidWrappers.forEach((vidWrapper) => vidWrapper.classList.remove('video-active'));

	// Activate the heading
	clicked.closest('.heading').classList.add('active');

	// Activate the related vid wrapper
	document.querySelector(`.${clicked.textContent.toLocaleLowerCase()}`).classList.add('video-active');
});
