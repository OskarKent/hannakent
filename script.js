const playbuttons = document.querySelectorAll(".play");
const loadingpage = () => {
    const loading = document.getElementById("loading");
    window.addEventListener("load", () => {
        loaded = !0;
        loading.style.display = "none";
    });
};
let closed = !0;
const menu = document.getElementById("menu");
menu.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
        if (closed === !0) {
            closed = !1;
            menu.children[1].style.display = "block";
            if (playbuttons.length < 3) {
                menu.children[0].src = "media/image/close.svg";
            } else {
                menu.children[0].src = "../media/image/close.svg";
            }
            menu.children[0].style.width = "75%";
            menu.children[0].style.height = "75%";
        } else {
            closed = !0;
            menu.children[1].style.display = "none";
            if (playbuttons.length < 3) {
                menu.children[0].src = "media/image/menu.svg";
            } else {
                menu.children[0].src = "../media/image/menu.svg";
            }            menu.children[0].style.width = "60%";
            menu.children[0].style.height = "60%";
        }
    }
});
const videoeffects = () => {
    const main = document.getElementById("main");
    const frames = document.querySelectorAll(".frame");
    const label = document.querySelectorAll(".label");
    main.currentTime += 0.1;
    const bigger = (src, frame, num) => {
        let t1 = frame.title;
        let t2 = main.title;
        let ogmainimgsrc = main.dataset.imgsrc;
        let ogframesrc = frame.src;
        main.title = t1;
        frame.title = t2;
        frame.src = ogmainimgsrc;
        main.dataset.imgsrc = ogframesrc;
        frame.dataset.videosrc = main.src;
        main.src = src;
        main.animate([{ width: "0px" }, { width: "70vw" }], { duration: 500, iterations: 1 });
        main.play();
        frame.currentTime += 0.1;
        label[num].textContent = frame.title;
        console.log("main image src:", main.dataset.imgsrc, "main src:", main.src);
    };
    frames.forEach((frame, num) => {
        frame.addEventListener("click", () => {
            bigger(frame.dataset.videosrc, frame, num);
        });
    })
};
loadingpage();
videoeffects();
const audios = document.querySelectorAll("audio");
let currentAudio = null;
let currentButton = null;
playbuttons.forEach((button, index) => {
    audios[index].addEventListener("ended", () => {
        audios[index].currentTime = 0;
        audios[index].pause();
        currentAudio = null;
        if (playbuttons.length < 3) {
            button.src = "media/image/play-button.png";
        } else {
            button.src = "../media/image/play-button.png"
        }
        button.alt = "Play-Taste";
        button.title = "Play-Taste";
    });
    button.addEventListener("click", () => {
        if (!audios[index].paused) {
            audios[index].pause();
            currentAudio = null;
            if (playbuttons.length < 3) {
                button.src = "media/image/play-button.png";
            } else {
                button.src = "../media/image/play-button.png"
            }            
            button.alt = "Play-Taste";
            button.title = "Play-Taste";
        } else {
            if (currentButton && currentButton !== button) {
                if (playbuttons.length < 3) {
                    currentButton.src = "media/image/play-button.png";
                } else {
                    currentButton.src = "../media/image/play-button.png";
                }
                currentButton.alt = "Play-Taste";
                currentButton.title = "Play-Taste";
            }
            if (currentAudio) {
                currentAudio.pause();
            }
            currentButton = button;
            audios[index].play();
            currentAudio = audios[index];
            if (playbuttons.length < 3) {
                button.src = "media/image/pause-button.png";
            } else {
                button.src = "../media/image/pause-button.png"
            }            
            button.alt = "Pause-Taste";
            button.title = "Pause-Taste";
        }
    });
});
