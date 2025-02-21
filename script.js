// loading screen
const loadingpage = () => {	
	const loading = document.getElementById("loading");

	window.addEventListener("load", () => {
		loaded = true;
		loading.style.display = "none";
	})
}

// for menu burger

let closed = true;
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
		if (window.innerWidth < 1024) {		
			if (closed === true) {
				closed = false;
				menu.children[1].style.display = 'block';
				menu.children[0].src = 'media/image/close.svg';
				menu.children[0].style.width = '75%'
				menu.children[0].style.height = '75%'
			} else {
				closed = true;
				menu.children[1].style.display = 'none';
				menu.children[0].src = 'media/image/menu.svg';
				menu.children[0].style.width = '60%'
				menu.children[0].style.height = '60%'
			}
		}
	}
)

// for videos
const videoeffects = () => {	
	const main = document.getElementById('main');
	const frame = document.querySelectorAll('.frame');
	const label = document.querySelectorAll('.label');

	// makes options videos look better
	const changeTime = () => {
		frame[0].currentTime += 10.5;
		frame[1].currentTime += 0.1;
		frame[2].currentTime += 0.1;
		frame[3].currentTime += 12;
		main.currentTime += 0.1;
	}

	// changes main video
	const bigger = (src, frame, num) => {
		let t1 = frame.title
		let t2 = main.title
		main.title = t1
		frame.title = t2
		frame.src = main.src
		main.src = src
		main.animate(
			[
				{ width: '0px' },
				{ width: '70vw'}
			],
			{
				duration: 500 ,
				iterations: 1
			}
		)
		main.play();
		frame.currentTime += 0.1
		label[num].textContent = frame.title
	}

	frame[0].addEventListener("click", () => {
		bigger(frame[0].src, frame[0], 0)
	})

	frame[1].addEventListener("click", () => {
		bigger(frame[1].src, frame[1], 1)
	})

	frame[2].addEventListener("click", () => {
		bigger(frame[2].src, frame[2], 2)
	})

	frame[3].addEventListener("click", () => {
		bigger(frame[3].src, frame[3], 3)
	})

	changeTime()
}

loadingpage()
videoeffects()

// for audio

const playbuttons = document.querySelectorAll('.play');
const audios = document.querySelectorAll('audio');

let currentAudio = null;
let currentButton = null;

playbuttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		// pausing it
		if (!audios[index].paused) {
    		audios[index].pause();
			currentAudio = null;
			button.src = 'media/image/play-button.png';
			button.alt = 'Play-Taste'
			button.title = 'Play-Taste'
		} else {
			// playing it
			if (currentButton && currentButton !== button) {
				currentButton.src = 'media/image/play-button.png';
				currentButton.alt = 'Play-Taste';
				currentButton.title = 'Play-Taste';
			}
			if (currentAudio) {
				currentAudio.pause()
			}
			currentButton = button;
			audios[index].play();
			currentAudio = audios[index];
			button.src = 'media/image/pause-button.png';
			button.alt = 'Pause-Taste';
			button.title = 'Pause-Taste';
		}
	})
})





























