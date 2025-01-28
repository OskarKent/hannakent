// loading screen
const loadingpage = () => {	
	const loading = document.getElementById("loading");

	window.addEventListener("load", () => {
		loaded = true;
		loading.style.display = "none";
	})
}

// for videos
const videoeffects = () => {	
	const main = document.getElementById('main');
	const frame = document.querySelectorAll('.frame');
	const label = document.querySelectorAll('.label');

	// makes options videos look better
	const changeTime = () => {
		frame[0].currentTime += 10.5;
		frame[1].currentTime += 0.1
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

let currentPlayingButton = null;
let currentAudioPlaying = null;

playbuttons.forEach((button, index) => {
	button.addEventListener('click', () => {
		const audio = audios[index];
		if (currentAudioPlaying === audio) {
			audio.pause();
			button.src = 'media/image/play-button.png';
			currentAudioPlaying === null;
		} else {
			if (currentAudioPlaying) {
				currentAudioPlaying.pause();
				currentPlayingButton.src = 'media/image/play-button.png';
			}
			audio.play();
			button.src = 'media/image/pause-button.png';
			currentAudioPlaying = audio;
			currentPlayingButton = button;
		}
	})
})





























