// Variables
const startPage = document.getElementById("startPage");
const playPage = document.getElementById("playPage");

let playerOnePicture = document.getElementById("playerOnePicture");
let playerTwoPicture = document.getElementById("playerTwoPicture");

const option = document.getElementsByClassName("option");
let choice = -1;

const fullBodyPictures =
[
    "assets/fullBody/cinnamoroll_full_body.png",
    "assets/fullBody/gudetama_full_body.webp",
    "assets/fullBody/keroppi_full_body.webp",
    "assets/fullBody/kuromi_full_body.webp",
    "assets/fullBody/my_melody_full_body.webp",
    "assets/fullBody/pompompurin_full_body.png",
    "assets/fullBody/tuxedo_sam_full_body.webp"
]

const doneButton = document.getElementsByClassName("doneButton");
const doneFirst = document.getElementById("doneFirst");
const doneSecond = document.getElementById("doneSecond");
let firstSelected = false;

const musicButton = document.getElementById("musicButton");
let musicIcon = document.getElementById("musicIcon");
let backgroundMusic = document.getElementById("backgroundMusic");

const musicPics =
{
    "muted" : "assets/audio_icons/muted_music_icon.png",
    "unmuted" : "assets/audio_icons/music_icon.png"
};

// Music
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

// Start Page
if (option) {
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", event => {
            choice = i;

            if (firstSelected == false) {
                playerOnePicture.style.display = "none";
                playerOnePicture.src = fullBodyPictures[i];
                if (doneFirst.style.display = "none") {
                    doneFirst.style.display = "block";
                }
                setTimeout(function() {
                    playerOnePicture.style.display = "block";
                }, 300);
            }
            else {
                playerTwoPicture.style.display = "none";
                playerTwoPicture.src = fullBodyPictures[i];
                if (doneSecond.style.display = "none") {
                    doneSecond.style.display = "block";
                }
                setTimeout(function() {
                    playerTwoPicture.style.display = "block";
                }, 300);
            }     
        })
    }
}

if (doneFirst) {
    doneFirst.addEventListener("click", event => {
        doneFirst.disabled = true;
        firstSelected = true;
    })
}

if (doneSecond) {
    doneSecond.addEventListener("click", event => {
        doneSecond.disabled = true;
        for (let i = 0; i < option.length; i++) {
            option[i].disabled = true;
        }
        startPage.style.display = "none";
        playPage.style.display = "flex";
        setUpGame();
    })
}

// function timer(ms) {
//     return new Promise(res => setTimeout(res, ms));
// }

// async function fadeInAndOutPages(page1, page2) {
//     page1.style.animation = "none";
//     page2.style.animation = "none";
//     await timer(100);
//     page1.style.cssText = "animation:fadeOut 5s ease; animation-fill-mode: forwards";
//     await timer(500);
//     page1.style.display = "none";
//     page2.style.cssText = "animation:fadeIn 5s ease; animation-fill-mode: forwards";
//     await timer(500);
//     page2.style.display = "flex";
// }

// Play Page
// Variables
let boardOne = document.getElementById("boardOne");
let boardTwo = document.getElementById("boardTwo");
let boardWidth = 750;
let boardHeight = 250;
boardOne.height = boardHeight;
boardOne.width = boardWidth;
boardTwo.height = boardHeight;
boardTwo.width = boardWidth;

let playerOneHeight = 90;
let playerOneWidth = 95;
let playerOneX = 50;
let playerOneY = boardHeight - playerOneHeight;
let playerOneImg;

let playerOne = {
    x : playerOneX,
    y : playerOneY,
    width : playerOneWidth,
    height : playerOneHeight
};

let playerTwoHeight = 90;
let playerTwoWidth = 95;
let playerTwoX = 50;
let playerTwoY = boardHeight - playerTwoHeight;
let playerTwoImg;

let playerTwo = {
    x : playerTwoX,
    y : playerTwoY,
    width : playerTwoWidth,
    height : playerTwoHeight
}

let obstacleArrayOne = [];
let obstacleArrayTwo = [];

let lollipopWidth = 47;
let lollipopHeight = 70;
let lollipopX = 700;
let lollipopY = boardHeight - lollipopHeight;
let lollipopImg;

let candyWidth = 89;
let candyHeight = 70;
let candyX = 700;
let candyY = boardHeight - candyHeight;
let candyImg;

let candyCaneWidth = 35
let candyCaneHeight = 70;
let candyCaneX = 700;
let candyCaneY = boardHeight - candyCaneHeight;
let candyCaneImg;

let pretzelWidth = 70;
let pretzelHeight = 70;
let pretzelX = 700;
let pretzelY = boardHeight - pretzelHeight;
let pretzelImg;

let contextOne = boardOne.getContext("2d");
let contextTwo = boardTwo.getContext("2d");

let velocityX = -8;
let velocityOneY = 0;
let velocityTwoY = 0;
let gravity = 0.4;

let gameOverOne = false;
let gameOverTwo = false;
let scoreOne = 0;
let scoreTwo = 0;

// Setting up canvas after characters are chosen
function setUpGame() {
    playerOne.width = playerOnePicture.naturalWidth / (playerOnePicture.naturalHeight / playerOne.height);
    playerOneImg = new Image();
    playerOneImg.src = playerOnePicture.src;
    contextOne.drawImage(playerOneImg, playerOne.x, playerOne.y, playerOne.width, playerOne.height);

    playerTwo.width = playerTwoPicture.naturalWidth / (playerTwoPicture.naturalHeight / playerOne.height);
    playerTwoImg = new Image();
    playerTwoImg.src = playerTwoPicture.src;
    contextTwo.drawImage(playerTwoImg, playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height);

    lollipopImg = new Image();
    lollipopImg.src = "assets/obstacles/lollipop.png";

    candyImg = new Image();
    candyImg.src = "assets/obstacles/candy.png";

    candyCaneImg = new Image();
    candyCaneImg.src = "assets/obstacles/candy_cane.png";

    pretzelImg = new Image();
    pretzelImg.src = "assets/obstacles/pretzel.png";

    requestAnimationFrame(update);
    setInterval(placeAllObstacles, 1000);
    document.addEventListener("keydown", movePlayer);
}   

function update() {
    if (!gameOverOne && !gameOverTwo) {
        drawCourseOne();
        drawCourseTwo();
    }
    else if (!gameOverOne && gameOverTwo) {
        drawCourseOne();
    }
    else if (gameOverOne && !gameOverTwo) {
        drawCourseTwo();
    }
    else {
        return;
    }
    requestAnimationFrame(update);
}

function drawCourseOne() {
    if (gameOverOne) {
        return;
    }
    contextOne.clearRect(0, 0, boardOne.width, boardOne.height);

    velocityOneY += gravity;
    playerOne.y = Math.min(playerOne.y + velocityOneY, playerOneY);

    contextOne.drawImage(playerOneImg, playerOne.x, playerOne.y, playerOne.width, playerOne.height);

    for (let i = 0; i < obstacleArrayOne.length; i++) {
        let obstacle = obstacleArrayOne[i];
        obstacle.x += velocityX;
        contextOne.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        if(detectCollision(playerOne, obstacle)) {
            gameOverOne = true;
        }
    }

    contextOne.fillStyle="black";
    contextOne.font="20px courier";
    scoreOne++;
    contextOne.fillText(scoreOne, 5, 20);
}

function drawCourseTwo() {
    if (gameOverTwo) {
        return;
    }
    contextTwo.clearRect(0, 0, boardTwo.width, boardTwo.height);

    velocityTwoY += gravity;
    playerTwo.y = Math.min(playerTwo.y + velocityTwoY, playerTwoY);

    contextTwo.drawImage(playerTwoImg, playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height);
    for (let i = 0; i < obstacleArrayTwo.length; i++) {
        let obstacle = obstacleArrayTwo[i];
        obstacle.x += velocityX;
        contextTwo.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        if(detectCollision(playerTwo, obstacle)) {
            gameOverTwo = true;
        }
    }

    contextTwo.fillStyle="black";
    contextTwo.font="20px courier";
    scoreTwo++;
    contextTwo.fillText(scoreTwo, 5, 20);
}

function movePlayer(key) {
    if ((!gameOverOne && !gameOverTwo)) {
        if ((key.code == "ArrowUp") && playerOne.y == playerOneY) {
            velocityOneY = -10;
        }
        if ((key.code == "KeyW") && playerTwo.y == playerTwoY) {
            velocityTwoY = -10;
        }
    }
    else if (!gameOverOne && gameOverTwo) {
        if ((key.code == "ArrowUp") && playerOne.y == playerOneY) {
            velocityOneY = -10;
        }
    }
    else if (gameOverOne && !gameOverTwo) {
        if ((key.code == "KeyW") && playerTwo.y == playerTwoY) {
            velocityTwoY = -10;
        }
    }
    else {
        return;
    }
}

function placeAllObstacles() {
    if (!gameOverOne && !gameOverTwo) {
        placeObstacle("one");
        placeObstacle("two");
    }
    else if (!gameOverOne && gameOverTwo) {
        placeObstacle("one");
    }
    else if (gameOverOne && !gameOverTwo) {
        placeObstacle("two");
    }
    else {
        return;
    }
}

function placeObstacle(course) {
    let obstacle = {
        img : null,
        x : null,
        y : null,
        width : null,
        height : null
    }

    let placeObjectChance = Math.random();

    if (placeObjectChance > .90) {
        obstacle.img = pretzelImg;
        obstacle.x = pretzelX;
        obstacle.y = pretzelY;
        obstacle.width = pretzelWidth;
        obstacle.height = pretzelHeight;
    }
    else if (placeObjectChance > .80) {
        obstacle.img = candyImg;
        obstacle.x = candyX;
        obstacle.y = candyY;
        obstacle.width = candyWidth;
        obstacle.height = candyHeight;
    }
    else if (placeObjectChance > .5) {
        obstacle.img = candyCaneImg;
        obstacle.x = candyCaneX;
        obstacle.y = candyCaneY;
        obstacle.width = candyCaneWidth;
        obstacle.height = candyCaneHeight;
    }
    else {
        obstacle.img = lollipopImg;
        obstacle.x = lollipopX;
        obstacle.y = lollipopY;
        obstacle.width = lollipopWidth;
        obstacle.height = lollipopHeight;
    }
    
    if (course === "one") {
        obstacleArrayOne.push(obstacle);
        if (obstacleArrayOne.length > 5) {
            obstacleArrayOne.shift();
        }
    }
    else if(course === "two") {
        obstacleArrayTwo.push(obstacle);
        if (obstacleArrayTwo.length > 5) {
            obstacleArrayTwo.shift();
        }
    }
}

// Tweaked collision conditions so there can be a small overlap in corners
// since the corners of images are invisible to the player
function detectCollision(objectOne, objectTwo) {
    return objectOne.x - 10 < objectTwo.x + objectTwo.width &&   //objectOne's top left corner doesn't reach objectTwo's top right corner
           objectOne.x + objectOne.width > objectTwo.x + 10 &&   //objectOne's top right corner passes objectTwo's top left corner
           objectOne.y - 10 < objectTwo.y + objectTwo.height &&  //objectOne's top left corner doesn't reach objectTwo's bottom left corner
           objectOne.y + objectOne.height > objectTwo.y + 10;    //objectOne's bottom left corner passes objectTwo's top left corner
}

// The code belows picks a random player as the second player
// after the user chooses their character.
// However, I decided that this will be a two player game

// let roboChoice = -1;
// if (doneButton) {
//     doneButton.addEventListener("click", event => {
//         doneButton.disabled = true;
//         addBorder(option[choice], "plum");
//         for (let i = 0; i < option.length; i++) {
//             option[i].disabled = true;
//         }

//         roboChoice = Math.floor(Math.random() * option.length);
//         console.log("choice" + roboChoice);
//         playerTwoPicture.src = fullBodyPictures[roboChoice];
//         moveThroughOptions();
//     })
// }

// function addBorder(element, color) {
//     element.style.borderWidth = "5px";
//     element.style.borderColor = color;
//     element.style.borderStyle = "solid";
// }

// function removeBorder(element) {
//     element.style.borderWidth = "0px";
//     element.style.borderColor = "transparent";
//     element.style.borderStyle = "none";
// }

// async function moveThroughOptions() {
//     await timer(100);
//     for (let i = 0; i < option.length; i++) {
//         option[i].style.opacity = 1;
//     }
//     for (let i = choice; i < option.length * 3; i++) {
//         await timer(100);
//         addBorder(option[i % option.length], "pink");
//         if ((i % option.length) == roboChoice && i >= (option.length * 2)) {
//             playerTwoPicture.style.display = "block";
//             break;
//         }
//         else if (i % option.length == choice) {
//             await timer(100);
//             addBorder(option[i % option.length], "plum");
//         }
//         else {
//             await timer(100);
//             removeBorder(option[i % option.length]);
//         }
//     }
// }

// function timer(ms) {
//     return new Promise(res => setTimeout(res, ms));
// }

