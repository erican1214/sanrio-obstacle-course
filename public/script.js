// Animation constants
const timingForSlides = {
    duration: 500,
    fill: "forwards",
    iterations: 1,
};

const slideToTop = {
    opacity: [1, 0],
    transform: ["translate(-50%, -50%)", "translate(-50%, -80%)"],
};

const slideFromTop = {
    opacity: [0, 1],
    transform: ["translate(-50%, -80%)", "translate(-50%, -50%)"],
};

const fadeInHalf = {
    opacity: [0, 0.5],
};

const fadeOutHalf = {
    opacity: [0.5, 0],
};

const timingForInfo = {
    duration: 500,
    fill : "forwards",
    iterations: 1,
};

// Variables for each "page"
const characterSelectionPage = document.getElementById("characterSelectionPage");
const backgroundSelectionPage = document.getElementById("backgroundSelectionPage");
const obstaclePage = document.getElementById("obstaclePage");

// Character Selection Page Variables
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
    "assets/fullBody/tuxedo_sam_full_body.webp",
    "assets/fullBody/badtz_maru_full_body.webp",
    "assets/fullBody/chococat_full_body.webp",
    "assets/fullBody/hello_kitty_full_body.webp",
    "assets/fullBody/dear_daniel_full_body.webp"
]

const doneButton = document.getElementsByClassName("doneButton");
const doneFirst = document.getElementById("doneFirst");
const doneSecond = document.getElementById("doneSecond");
let firstSelected = false;

const continueContainer = document.getElementById("continueContainer");
const continueButton = document.getElementById("continueButton");
const reselectButton = document.getElementById("reselectButton");

// Variables for music elements
const musicButton = document.getElementById("musicButton");
let musicIcon = document.getElementById("musicIcon");
let music = document.getElementById("music");

const musicPics =
{
    "muted" : "assets/audio_icons/muted_music_icon.png",
    "unmuted" : "assets/audio_icons/music_icon.png"
};

// Music button function
if (musicButton) {
    musicButton.addEventListener("click", event => {
        if (music.muted == true) {
            musicIcon.src = musicPics["unmuted"];
            music.muted = false;
            music.play();
        }
        else {
            musicIcon.src = musicPics["muted"];
            music.muted = true;
            music.pause();
        }
    })
}

// Character Selection Page Functions
if (option) {
    for (let i = 0; i < option.length; i++) {
        option[i].addEventListener("click", event => {
            choice = i;

            if (firstSelected == false) {
                playerOnePicture.style.display = "none";
                playerOnePicture.src = fullBodyPictures[i];
                if (doneFirst.style.display = "none") {
                    doneFirst.style.display = "block";
                    doneFirst.disabled = false;
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
                    doneSecond.disabled = false;
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

        continueContainer.style.display = "flex";
    })
}

if (reselectButton) {
    reselectButton.addEventListener("click", event => {
        playerOnePicture.style.display = "none";
        playerTwoPicture.style.display = "none";
        firstSelected = false;
        doneFirst.style.display = "none";
        doneSecond.style.display = "none";        

        for (let i = 0; i < option.length; i++) {
            option[i].disabled = false;
        }

        continueContainer.style.display = "none";
    })
}

if (continueButton) {
    continueButton.addEventListener("click", event => {
        characterSelectionPage.style.display = "none";
        backgroundSelectionPage.style.display = "flex";
    })
}

let bgList = document.getElementsByClassName("bgList");
let bgOnePicture = document.getElementsByClassName("bgOnePicture");
let bgTwoPicture = document.getElementsByClassName("bgTwoPicture");

const leftArrowOne = document.getElementById("leftArrowOne");
const rightArrowOne = document.getElementById("rightArrowOne");
const leftArrowTwo = document.getElementById("leftArrowTwo");
const rightArrowTwo = document.getElementById("rightArrowTwo");

let currentOne = 0;
let currentTwo = 0;
let translateX = 0;

let continueButtonTwo = document.getElementById("continueButtonTwo");

if (leftArrowOne) {
    leftArrowOne.addEventListener("click", event => {
        currentOne -= 1;
        if (currentOne < 0) {
            currentOne = bgOnePicture.length - 1;
        }
        runSlider("one");
    })
}

if (rightArrowOne) {
    rightArrowOne.addEventListener("click", event => {
        currentOne += 1;
        if (currentOne >= bgOnePicture.length) {
            currentOne = 0;
        }
        runSlider("one");
    })
}

if (leftArrowTwo) {
    leftArrowTwo.addEventListener("click", event => {
        currentTwo -= 1;
        if (currentTwo < 0) {
            currentTwo = bgTwoPicture.length - 1;
        }
        runSlider("two");
    })
}

if (rightArrowTwo) {
    rightArrowTwo.addEventListener("click", event => {
        currentTwo += 1;
        if (currentTwo >= bgTwoPicture.length) {
            currentTwo = 0
        }
        runSlider("two");
    })
}

function runSlider(course) {
    if (course === "one") {
        translateX = bgOnePicture[currentOne].width * currentOne * -1;
        bgList[0].animate([{transform : `translateX(${translateX}px)`}], timingForSlides);
    }
    else {
        translateX = bgTwoPicture[currentTwo].width * currentTwo * -1;
        bgList[1].animate([{transform : `translateX(${translateX}px)`}], timingForSlides);
    }
}


if (continueButtonTwo) {
    continueButtonTwo.addEventListener("click", event => {
        backgroundSelectionPage.style.display = "none";
        obstaclePage.style.display = "flex";
        openInstructions();
        restartContainer.style.display = "none";
        setUpGame();
    })
}

// Obstacle Page Variables
// Canvas Section
let playedOnce = false; //clearInterval does not work, so this will keep track if player replays game
let winnerMessage = document.getElementById("winnerMessage");

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
let lollipopImg = new Image();
lollipopImg.src = "assets/obstacles/lollipop.png";

let candyWidth = 89;
let candyHeight = 70;
let candyX = 700;
let candyY = boardHeight - candyHeight;
let candyImg = new Image();
candyImg.src = "assets/obstacles/candy.png";

let candyCaneWidth = 35
let candyCaneHeight = 70;
let candyCaneX = 700;
let candyCaneY = boardHeight - candyCaneHeight;
let candyCaneImg = new Image();
candyCaneImg.src = "assets/obstacles/candy_cane.png";

let pretzelWidth = 70;
let pretzelHeight = 70;
let pretzelX = 700;
let pretzelY = boardHeight - pretzelHeight;
let pretzelImg = new Image();
pretzelImg.src = "assets/obstacles/pretzel.png";

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

// Obstacle Page Functions
// Setting up canvas after characters are chosen
function setUpGame() {
    boardOne.style.backgroundImage = `url(${bgOnePicture[currentOne].src})`;
    boardOne.style.backgroundSize = "cover";
    playerOne.width = playerOnePicture.naturalWidth / (playerOnePicture.naturalHeight / playerOne.height);
    playerOneImg = new Image();
    playerOneImg.src = playerOnePicture.src;
    contextOne.drawImage(playerOneImg, playerOne.x, playerOne.y, playerOne.width, playerOne.height);

    boardTwo.style.backgroundImage = `url(${bgTwoPicture[currentTwo].src})`;
    boardTwo.style.backgroundSize = "cover";
    playerTwo.width = playerTwoPicture.naturalWidth / (playerTwoPicture.naturalHeight / playerOne.height);
    playerTwoImg = new Image();
    playerTwoImg.src = playerTwoPicture.src;
    contextTwo.drawImage(playerTwoImg, playerTwo.x, playerTwo.y, playerTwo.width, playerTwo.height);
}

function startGameFirstTime() {
    requestAnimationFrame(update);
    setInterval(placeAllObstacles, 1000);
    document.addEventListener("keydown", movePlayer);
}

function startGameRepeat() {
    requestAnimationFrame(update);

    // Duplicate obstacles show in a cluster after the
    // animation first update so the first set of
    // obstacles are deleted
    obstacleArrayOne = [];
    obstacleArrayTwo = [];
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
        if (scoreOne > scoreTwo) {
            winnerMessage.innerHTML = "Player 1 wins!";
        }
        else if (scoreOne < scoreTwo) {
            winnerMessage.innerHTML = "Player 2 wins!";
        }
        else {
            winnerMessage.innerHTML = "It's a tie!";
        }
        winnerMessage.style.display = "block";
        restartContainer.style.display = "flex";
        updateScoreboard();
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
        if ((key.code == "KeyW") && playerOne.y == playerOneY) {
            velocityOneY = -10;
        }
        if ((key.code == "ArrowUp") && playerTwo.y == playerTwoY) {
            velocityTwoY = -10;
        }
    }
    else if (!gameOverOne && gameOverTwo) {
        if ((key.code == "KeyW") && playerOne.y == playerOneY) {
            velocityOneY = -10;
        }
    }
    else if (gameOverOne && !gameOverTwo) {
        if ((key.code == "ArrowUp") && playerTwo.y == playerTwoY) {
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

// Restart Section
const playAgainButton = document.getElementById("playAgainButton");
const mainMenuButton = document.getElementById("mainMenuButton");
const restartContainer = document.getElementById("restartContainer");

if (playAgainButton) {
    playAgainButton.addEventListener("click", event => {
        resetCanvas();

        setTimeout(function() { 
            setUpGame();
            startGameRepeat();
        }, 300);
        restartContainer.style.display = "none";
    })
}

if (mainMenuButton) {
    mainMenuButton.addEventListener("click", event => {
        resetCanvas();
        obstaclePage.style.display = "none";
        characterSelectionPage.style.display = "flex";
    })
}

function resetCanvas() {
    playedOnce = true;
    contextOne.clearRect(0, 0, boardOne.width, boardOne.height);
    contextTwo.clearRect(0, 0, boardTwo.width, boardTwo.height);
    gameOverOne = false;
    gameOverTwo = false;
    scoreOne = 0;
    scoreTwo = 0;
    obstacleArrayOne = [];
    obstacleArrayTwo = [];

    playerOne.y = boardHeight - playerOneHeight;
    playerTwo.y = boardHeight - playerTwoHeight;
    velocityOneY = 0;
    velocityTwoY = 0;

    winnerMessage.innerHTML = "";
    winnerMessage.style.display = "none";
}

// Updating scores
let playerOneScores = document.getElementsByClassName("playerOneScores");
let playerTwoScores = document.getElementsByClassName("playerTwoScores");

let playerOneScoresList = [];
let playerTwoScoresList = [];

let highScoreOne = document.getElementById("highScoreOne");
let highScoreTwo = document.getElementById("highScoreTwo");

let highScoreOneNum = 0;
let highScoreTwoNum = 0;

// Updates recent scores
function updateScoreboard() {
    playerOneScoresList.unshift(scoreOne);
    playerTwoScoresList.unshift(scoreTwo);

    if (playerOneScoresList.length > 5) {
        playerOneScoresList.pop();
        playerTwoScoresList.pop();
    }

    for (let i = 0; i < playerOneScoresList.length; i++) {
        playerOneScores[i].innerHTML = playerOneScoresList[i];
        playerTwoScores[i].innerHTML = playerTwoScoresList[i];
    }

    if (scoreOne > highScoreOneNum) {
        highScoreOneNum = scoreOne;
        highScoreOne.innerHTML = "<u>Player 1</u><br />" + highScoreOneNum;
    }

    if (scoreTwo > highScoreTwoNum) {
        highScoreTwoNum = scoreTwo;
        highScoreTwo.innerHTML = "<u>Player 2</u><br />" + highScoreTwoNum;
    }

    saveScoresToLocal();
}

// Saves recent and high scores to local browser even when browser is closed
function saveScoresToLocal() {
    for (let i = 0; i < playerOneScores.length; i++) {
        if (playerOneScores[i].innerHTML == null) {
            break;
        }
        localStorage.setItem("scoreOne" + i, playerOneScores[i].innerHTML);
        localStorage.setItem("scoreTwo" + i, playerTwoScores[i].innerHTML);
    }

    if (highScoreOne.innerHTML == null) {
        return;
    }
    localStorage.setItem("highScoreOne", highScoreOneNum);
    localStorage.setItem("highScoreTwo", highScoreTwoNum);
}

// Loads recent scores saved to local browser if user has played already
function loadLocalScores() {
    let currentScore;
    for (let i = 0; i < playerOneScores.length; i++) {
        currentScore = localStorage.getItem("scoreOne" + i);
        if (currentScore == null) {
            break;
        }
        playerOneScores[i].innerHTML = currentScore;
        playerOneScoresList[i] = currentScore;

        currentScore = localStorage.getItem("scoreTwo" + i);
        playerTwoScores[i].innerHTML = currentScore;
        playerTwoScoresList[i] = currentScore;
    }

    currentScore = localStorage.getItem("highScoreOne");
    if (currentScore == null) {
        return;
    }
    highScoreOne.innerHTML = "<u>Player 1</u><br />" + currentScore;
    highScoreOneNum = parseInt(currentScore);

    currentScore = localStorage.getItem("highScoreTwo");
    highScoreTwo.innerHTML = "<u>Player 2</u><br />" + currentScore;
    highScoreTwoNum = parseInt(currentScore);
}

// Loads recent scores when window loads
window.onload = loadLocalScores();

// Instruction Section
const closeButtonOne = document.getElementById("closeButtonOne");
const overlay = document.getElementById("overlay");
const instructions = document.getElementById("instructions");
const helpButton = document.getElementById("helpButton");
let instructionsShown = false;
let creditsShown = false;

if (closeButtonOne) {
    closeButtonOne.addEventListener("click", event => {
        closeInstructions();

        if (obstaclePage.style.display === "flex") {
            if (!playedOnce) {
                startGameFirstTime();
            }
            else {
                startGameRepeat();
            }
        }
    })
}

if (helpButton) {
    helpButton.addEventListener("click", event => {
        if (instructions.style.display === "none") {
            openInstructions();
        }
        else {
            closeInstructions();
        }
        if (credits.style.display === "block") {
            closeCredits();
        }
    })
}

// Credits Section
const closeButtonTwo = document.getElementById("closeButtonTwo");
const credits = document.getElementById("credits");
const creditsButton = document.getElementById("creditsButton");

if (closeButtonTwo) {
    closeButtonTwo.addEventListener("click", event => {
        closeCredits();
    })
}

if (creditsButton) {
    creditsButton.addEventListener("click", event => {
        if (credits.style.display === "none"){
            openCredits();
        }
        else {
            closeCredits();
        }
        if (instructions.style.display === "block") {
            closeInstructions();
        }
    })
}

function openInstructions() {
    instructions.style.display = "block";
    instructions.animate(slideFromTop, timingForInfo);
    instructionsShown = true;

    if (!creditsShown) {
        overlay.style.display = "block";
        overlay.animate(fadeInHalf, timingForInfo);
    }
}

function closeInstructions() {
    instructions.animate(slideToTop, timingForInfo);
    instructionsShown = false;

    if (!creditsShown) overlay.animate(fadeOutHalf, timingForInfo);

    setTimeout(function() {
        instructions.style.display = "none";
        if (!creditsShown) overlay.style.display = "none";
    }, 500);
}

function openCredits() {
    credits.style.display = "block";
    credits.animate(slideFromTop, timingForInfo);
    creditsShown = true;

    if (!instructionsShown) {
        overlay.style.display = "block";
        overlay.animate(fadeInHalf, timingForInfo);
    }
}

function closeCredits() {
    credits.animate(slideToTop, timingForInfo);
    creditsShown = false;

    if(!instructionsShown) overlay.animate(fadeOutHalf, timingForInfo);

    setTimeout(function() {
        credits.style.display = "none";
        if(!instructionsShown) overlay.style.display = "none";
    }, 500);
}