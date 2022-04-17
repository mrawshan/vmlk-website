const sectionDirectors = document.querySelector('.directors');

// For our work page //
// Select all the list item and the video container
const listItem = document.querySelectorAll('.heading-wrapper ul .item');
console.log(listItem);

const ourWorkVideos = document.querySelectorAll('.tvc, .digital, .documentary, .events, .corporate');
console.log(ourWorkVideos);

// Function to check the current active item
const checkCrntAct = function (list) {
	list = document.getElementsByClassName('active');
	console.log(list);

	for (let i = 0; i < list.length; i++) {
		console.log(list[i]);
		list[i].classList.remove('active');
	}
};

// Function to check current active video
const checkCrntActVideo = function (video) {
	video = document.getElementsByClassName('video-active');

	for (let i = 0; i < video.length; i++) {
		console.log(video[i]);
		video[i].classList.remove('video-active');
	}
};

//Loop on the listItem
listItem.forEach(function (item) {
	item.addEventListener('click', function (event) {
		checkCrntAct(listItem);
		checkCrntActVideo(ourWorkVideos);
		event.currentTarget.className += ' active';

		// Switch statement
		const activeVideo = event.target.innerHTML;

		switch (activeVideo) {
			case 'TVC':
				document.querySelector('.tvc').classList.add('video-active');
				break;
			case 'DIGITAL':
				document.querySelector('.digital').classList.add('video-active');
				break;
			case 'DOCUMENTARY':
				document.querySelector('.documentary').classList.add('video-active');
				break;
			case 'EVENTS':
				document.querySelector('.events').classList.add('video-active');
				break;
			case 'CORPORATE':
				document.querySelector('.corporate').classList.add('video-active');
				break;
		}
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

//*-----------Page: directors ----------*//
const directors = [
	{
		name: 'Minalee Madanayake',
		image: './assert/images/directors/img-minalee-madanayake.png',
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

// Create directors
const displayDirectors = function (directors) {
	// Loop over the directors array
	directors.forEach(function (director) {
		//Create directors name list
		const directorsNameList = document.createElement('ul');
		const li = document.createElement('li');
		li.textContent = director.name;
		directorsNameList.appendChild(li);
		document.getElementById('directors-name').appendChild(directorsNameList);

		//When the director name was clicked
		li.addEventListener('click', function () {
			const list = document.getElementsByClassName('active');
			for (const item of list) {
				item.classList.remove('active');
			}
			li.className = 'active';

			//Hide the VMLK logo
			const dPLogo = document.getElementById('hide-element');
			dPLogo.classList.add('hide');

			//Director image
			const directorImage = document.getElementById('director-image');
			directorImage.src = director.image; //Director image is hidden until the  user click the director
			directorImage.classList.remove('hide');

			//Instagram and Facebook icon
			const instagram = document.getElementById('director-instagram');
			instagram.href = director.instagram;
			console.log(instagram.href);

			const facebook = document.getElementById('director-facebook');
			facebook.href = director.facebook;
			console.log(facebook.href);

			const socialIcon = document.getElementById('director-social-icon');
			socialIcon.classList.remove('hide');
			//Director body text
			const bodyText = document.getElementById('director-body-text');
			bodyText.textContent = director.bodyText;
		});
	});
};

if (sectionDirectors !== null) {
	displayDirectors(directors);
}
