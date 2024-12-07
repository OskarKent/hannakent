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
		frame[2].currentTime += 35;
		frame[3].currentTime += 12;
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

const audio = document.querySelectorAll("audio")
const button = document.querySelectorAll(".play")

let playing = false

button.forEach((image, index) => {
	image.addEventListener("click", () => {
		if (playing === false) {			
			audio[index].play()
			button[index].src = "../media/image/pause-button.png"
			playing = true
		} else if (playing === true) {
			audio[index].pause()
			button[index].src = "../media/image/play-button.png"
			playing = false
		}
	})
})






// for nav

const select = document.querySelector('select');

const teleport = (id) => {
	id.scrollIntoView({behavior: "smooth"})
}

select.addEventListener("input", () => {
	let v = select.value;
	if (v === "Videos") {		
		teleport(document.getElementById('top'))
	} else if (v === "Demos") {
		teleport(document.getElementById('demoreelstext'))
	} else if (v === "Zufriedene Kunden") {
		teleport(document.getElementById('happycustomerstext'))
	} else if (v === "Studio") {
		teleport(document.getElementById('studioinfotext'))
	}
})




























