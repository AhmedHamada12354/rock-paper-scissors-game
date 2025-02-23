let mode;
const score = document.getElementById("score");
const modeNormal = document.getElementById("mode-normal");
const modeAdvanced = document.getElementById("mode-advanced");
const winnerDetection = document.getElementById("winner-detection");
const normalRules = document.getElementById("normal-rules");
const advancedRules = document.getElementById("advanced-rules");
const modeChanger = document.getElementById("modeChanger");
const reset = document.getElementById("reset");
const rulesBtn = document.getElementById("rules-btn");
const modesBtn = document.getElementById("modes-btn");
const xModesBtn = document.getElementById("x-button1");
const xNormalBtn = document.getElementById("x-button2");
const xAdvancedBtn = document.getElementById("x-button3");
const normalBtn = document.getElementById("mode1");
const advancedBtn = document.getElementById("mode2");
const buttons = [
    document.getElementById("paper-btn1"),
    document.getElementById("paper-btn2"),
    document.getElementById("rock-btn1"),
    document.getElementById("rock-btn2"),
    document.getElementById("scissors-btn1"),
    document.getElementById("scissors-btn2"),
    document.getElementById("lizard-btn"),
    document.getElementById("spock-btn"),
];
let playerChoice;
let houseChoice;
const player = document.getElementById("player");
const house = document.getElementById("house");
const playerImg = document.getElementById("player-img");
const houseImg = document.getElementById("house-img");
const playerLayer1 = document.getElementById("player-layer1");
const playerLayer2 = document.getElementById("player-layer2");
const playerLayer3 = document.getElementById("player-layer3");
const houseLayer1 = document.getElementById("house-layer1");
const houseLayer2 = document.getElementById("house-layer2");
const houseLayer3 = document.getElementById("house-layer3");
const finalMessage = document.getElementById("final-message");
const playAgain = document.getElementById("play-again");

function storingData() {
    if (!sessionStorage.mode) {
        sessionStorage.mode = "normal";
    };
    mode = sessionStorage.mode;
    if (!sessionStorage.score) {
        sessionStorage.score = 0;
    };
    score.innerText = parseInt(sessionStorage.score);
};

function checkMode() {
    if (mode == "normal") {
        modeNormal.classList.remove("hide");
        modeAdvanced.classList.add("hide");
    } else {
        modeNormal.classList.add("hide");
        modeAdvanced.classList.remove("hide");
    };
};

window.onload = function () {
    storingData();
    winnerDetection.classList.add("hide");
    normalRules.classList.add("hide");
    advancedRules.classList.add("hide");
    modeChanger.classList.add("hide");
    checkMode();
};

reset.onclick = function () {
    sessionStorage.score = 0;
    score.innerText = sessionStorage.score;
    winnerDetection.classList.add("hide");
    checkMode()
};

function disable() {
    document.querySelectorAll("body *:not(.not)").forEach((element) => element.classList.add("disabled"));
};

function enable() {
    document.querySelectorAll("body *").forEach((element) => element.classList.remove("disabled"));
};

rulesBtn.onclick = function () {
    disable();
    modeChanger.classList.add("hide");
    if (mode == "normal") {
        advancedRules.classList.add("hide");
        if (normalRules.classList.contains("hide")) {
            normalRules.classList.remove("hide");
            return;
        };
        normalRules.classList.add("hide");
        enable();
    } else {
        normalRules.classList.add("hide");
        if (advancedRules.classList.contains("hide")) {
            advancedRules.classList.remove("hide");
            return;
        };
        advancedRules.classList.add("hide");
        enable();
    }
};

modesBtn.onclick = function () {
    disable();
    advancedRules.classList.add("hide");
    normalRules.classList.add("hide");
    if (modeChanger.classList.contains("hide")) {
        modeChanger.classList.remove("hide");
        return;
    };
    modeChanger.classList.add("hide");
    enable();
};

xModesBtn.onclick = function () {
    modeChanger.classList.add("hide");
    enable();
};

xNormalBtn.onclick = function () {
    normalRules.classList.add("hide");
    enable();
};

xAdvancedBtn.onclick = function () {
    advancedRules.classList.add("hide");
    enable();
};

normalBtn.onclick = function () {
    sessionStorage.mode = "normal";
    mode = sessionStorage.mode;
    checkMode();
    modeChanger.classList.add("hide");
    enable();
};

advancedBtn.onclick = function () {
    sessionStorage.mode = "advanced";
    mode = sessionStorage.mode;
    checkMode();
    modeChanger.classList.add("hide");
    enable();
};

function clearClasses(element) {
    element.classList.remove("rock");
    element.classList.remove("paper");
    element.classList.remove("scissors");
    element.classList.remove("lizard");
    element.classList.remove("spock");
}

playAgain.onclick = function () {
    winnerDetection.classList.add("hide");
    if (mode == "normal") {
        modeNormal.classList.remove("hide");
        modeAdvanced.classList.add("hide");
    } else {
        modeNormal.classList.add("hide");
        modeAdvanced.classList.remove("hide");
    }
    modesBtn.classList.remove("hide");
    rulesBtn.classList.remove("hide");
}

function houseChoose() {
    let choices = [];
    if (mode == "normal") {
        choices = ["rock", "paper", "scissors"];
    } else {
        choices = ["rock", "paper", "scissors", "lizard", "spock"];
    };
    houseChoice = choices[Math.floor(Math.random() * choices.length)];
};

function win() {
    playerLayer1.classList.add("layer1");
    playerLayer2.classList.add("layer2");
    playerLayer3.classList.add("layer3");
    houseLayer1.classList.remove("layer1");
    houseLayer2.classList.remove("layer2");
    houseLayer3.classList.remove("layer3");
    sessionStorage.score = parseInt(sessionStorage.score) + 1;
    score.innerText = sessionStorage.score;
    finalMessage.innerText = "You Won";
};

function draw() {
    playerLayer1.classList.add("layer1");
    playerLayer2.classList.add("layer2");
    playerLayer3.classList.add("layer3");
    houseLayer1.classList.add("layer1");
    houseLayer2.classList.add("layer2");
    houseLayer3.classList.add("layer3");
    finalMessage.innerText = "You draw";
};

function lose() {
    playerLayer1.classList.remove("layer1");
    playerLayer2.classList.remove("layer2");
    playerLayer3.classList.remove("layer3");
    houseLayer1.classList.add("layer1");
    houseLayer2.classList.add("layer2");
    houseLayer3.classList.add("layer3");
    sessionStorage.score = 0;
    score.innerText = sessionStorage.score;
    finalMessage.innerText = "You lost";
};

function clearResult() {
    playerLayer1.classList.remove("layer1");
    playerLayer2.classList.remove("layer2");
    playerLayer3.classList.remove("layer3");
    houseLayer1.classList.remove("layer1");
    houseLayer2.classList.remove("layer2");
    houseLayer2.classList.remove("layer2");
    finalMessage.innerText = "";
};

function rockState() {
    if (houseChoice == "scissors" || houseChoice == "lizard") {
        win();
    } else if (houseChoice == "paper" || houseChoice == "spock") {
        lose();
    } else {
        draw();
    };
};

function paperState() {
    if (houseChoice == "rock" || houseChoice == "spock") {
        win();
    } else if (houseChoice == "lizard" || houseChoice == "scissors") {
        lose();
    } else {
        draw();
    };
};

function scissorsState() {
    if (houseChoice == "paper" || houseChoice == "lizard") {
        win();
    } else if (houseChoice == "rock" || houseChoice == "spock") {
        lose();
    } else {
        draw();
    };
};

function lizardState() {
    if (houseChoice == "paper" || houseChoice == "spock") {
        win();
    } else if (houseChoice == "rock" || houseChoice == "scissors") {
        lose();
    } else {
        draw();
    };
};

function spockState() {
    if (houseChoice == "rock" || houseChoice == "scissors") {
        win();
    } else if (houseChoice == "lizard" || houseChoice == "paper") {
        lose();
    } else {
        draw();
    };
};

function checkState() {
    switch (playerChoice) {
        case "rock":
            rockState();
            break;
            
        case "paper":
            paperState();
            break;
                
        case "scissors":
            scissorsState();
            break;
            
        case "spock":
            spockState();
            break;
            
        case "lizard":
            lizardState();
            break;
    };
};

function houseSetting() {
    house.classList.add(`${houseChoice}`);
    houseImg.src = `images/icon-${houseChoice}.svg`;
    playAgain.classList.remove("hide");
    checkState();
};

buttons.forEach(function (element) {
    element.onclick = function () {
        winnerDetection.classList.remove("hide");
        modeNormal.classList.add("hide");
        modeAdvanced.classList.add("hide");
        clearClasses(player);
        playerImg.src = "";
        clearClasses(house);
        houseImg.src = "";
        playerChoice = element.dataset.type;
        player.classList.add(`${element.dataset.type}`);
        playerImg.src = `images/icon-${element.dataset.type}.svg`;
        rulesBtn.classList.add("hide");
        modesBtn.classList.add("hide");
        houseChoose();
        playAgain.classList.add("hide");
        clearResult();
        setTimeout(houseSetting, 3000);
    };
});
