let playerOnePicture = document.getElementById("playerOnePicture");
let playerTwoPicture = document.getElementById("playerTwoPicture");

const option = document.getElementsByClassName("option");
let choice = -1;
let roboChoice = -1;

const fullBodyPictures =
[
    "assets/fullBody/cinnamoroll_full_body.webp",
    "assets/fullBody/gudetama_full_body.webp",
    "assets/fullBody/keroppi_full_body.webp",
    "assets/fullBody/kuromi_full_body.webp",
    "assets/fullBody/my_melody_full_body.webp",
    "assets/fullBody/pompompurin_full_body.png",
    "assets/fullBody/tuxedo_sam_full_body.webp"
]

const doneButton = document.getElementById("doneButton");

const musicButton = document.getElementById("musicButton");
let musicIcon = document.getElementById("musicIcon");
let backgroundMusic = document.getElementById("backgroundMusic");

const musicPics =
{
    "muted" : "assets/audio_icons/muted_music_icon.png",
    "unmuted" : "assets/audio_icons/music_icon.png"
};

if (option) {
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", event => {
            if (doneButton.style.display = "none") {
                doneButton.style.display = "block";
            }
            choice = i;
            playerOnePicture.style.display = "none";
            playerOnePicture.src = fullBodyPictures[i];
            setTimeout(function() {
                playerOnePicture.style.display = "block";
            }, 300);     
        })
    }
}

function addBorder(element, color) {
    element.style.borderWidth = "5px";
    element.style.borderColor = color;
    element.style.borderStyle = "solid";
}

function removeBorder(element) {
    element.style.borderWidth = "0px";
    element.style.borderColor = "transparent";
    element.style.borderStyle = "none";
}

if (doneButton) {
    doneButton.addEventListener("click", event => {
        doneButton.disabled = true;
        addBorder(option[choice], "plum");
        for (let i = 0; i < option.length; i++) {
            option[i].disabled = true;
        }

        roboChoice = Math.floor(Math.random() * option.length);
        console.log("choice" + roboChoice);
        playerTwoPicture.src = fullBodyPictures[roboChoice];
        moveThroughOptions();
    })
}

async function moveThroughOptions() {
    await timer(100);
    for (let i = 0; i < option.length; i++) {
        option[i].style.opacity = 1;
    }
    for (let i = choice; i < option.length * 3; i++) {
        await timer(100);
        addBorder(option[i % option.length], "pink");
        if ((i % option.length) == roboChoice && i >= (option.length * 2)) {
            playerTwoPicture.style.display = "block";
            break;
        }
        else if (i % option.length == choice) {
            await timer(100);
            addBorder(option[i % option.length], "plum");
        }
        else {
            await timer(100);
            removeBorder(option[i % option.length]);
        }
    }
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

if (musicButton) {
    musicButton.addEventListener("click", event => {
        if (backgroundMusic.muted == true) {
            musicIcon.src = musicPics["unmuted"];
            backgroundMusic.muted = false;
            backgroundMusic.play();
        }
        else {
            musicIcon.src = musicPics["muted"];
            backgroundMusic.muted = true;
            backgroundMusic.pause();
        }
    })
}

