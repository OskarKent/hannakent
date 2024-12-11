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
		main.currentTime += 0.1;
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

const pausebutton = document.querySelectorAll('.play');
const audio0 = document.getElementById('audio0');
const audio1 = document.getElementById('audio1');
let playing = false

const playAudio = (audio, button) => {
	if (playing === false) {		
		audio.play()
		button.src = "media/image/pause-button.png"
		playing = true
	} else if (playing === true) {
		audio.pause()
		button.src = "media/image/play-button.png"
		playing = false
	} else {
		console.log('eroooooooor! fix it! fix it!')
	}
}

pausebutton[0].addEventListener("click", () => {
	playAudio(audio0, pausebutton[0]);
})

pausebutton[1].addEventListener("click", () => {
	playAudio(audio1, pausebutton[1]);
})



























