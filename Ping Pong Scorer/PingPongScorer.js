const playerOneBtn = document.querySelector(".playerOne");
const playerTwoBtn = document.querySelector(".playerTwo");
const resetBtn = document.querySelector(".reset");
const score = document.querySelector(".score");
const selectOptions = document.querySelector("#selectOptions");
const playerOneScore = document.querySelector(".playerOneResult");
const playerTwoScore = document.querySelector(".playerTwoResult");

let scorePlayerOne = 0;
let scorePlayerTwo = 0;
playerOneScore.innerHTML = "0";
playerTwoScore.innerHTML = "0";



const setScore = (whoScored) => {

    if (whoScored === "playerOne") {
        if (scorePlayerOne < parseInt(selectOptions.value) && scorePlayerTwo < parseInt(selectOptions.value)) {
            scorePlayerOne += 1;
            playerOneScore.innerHTML = scorePlayerOne;           
        }
    } else {
        if (scorePlayerTwo < parseInt(selectOptions.value) && scorePlayerOne < parseInt(selectOptions.value)) {
            scorePlayerTwo += 1;
            playerTwoScore.innerHTML = scorePlayerTwo;
    }
}
}

const setWinnerColor = () => {
    if (scorePlayerOne === parseInt(selectOptions.value)) {
        playerOneBtn.style.opacity = "30%";
        playerTwoBtn.style.opacity = "30%";
        playerOneScore.style.color = "green";
        playerTwoScore.style.color = "red";
    } else if(scorePlayerTwo === parseInt(selectOptions.value)){
        playerOneBtn.style.opacity = "30%";
        playerTwoBtn.style.opacity = "30%";
        playerOneScore.style.color = "red";
        playerTwoScore.style.color = "green";
    }
}

const setToBeggining = () => {
    playerOneScore.innerHTML = scorePlayerOne;
    playerTwoScore.innerHTML = scorePlayerTwo;
    playerOneBtn.style.opacity = "100%";
    playerTwoBtn.style.opacity = "100%";
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";

}

playerOneBtn.addEventListener("click", (evt) => {
    
    setScore("playerOne");
    setWinnerColor();

})

playerTwoBtn.addEventListener("click", (evt) => {
    
    setScore("playerTwo");
    setWinnerColor();
})

resetBtn.addEventListener("click", () => {
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    setToBeggining();
})

