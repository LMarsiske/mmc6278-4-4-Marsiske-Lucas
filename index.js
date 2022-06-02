var words = [
  "bananas",
  "grapes",
  "carousel",
  "milkshake",
  "javascript",
  "limousine",
  "chocolate",
  "programming",
  "meatloaf",
  "ukulele",
  "mango",
];

let wordToGuess = "";
let wordToGuessArr = [];
let convertedWordToGuess = "";
let previousWord = "";
let incorrectLetters = [];
let remainingGuesses = 10;
let wins = 0;
let losses = 0;

const selectWord = () => {
  let rand = Math.floor(Math.random() * 11);
  console.log(rand);
  wordToGuess = words[rand];
  wordToGuessArr = wordToGuess.split("");
  console.log(wordToGuess);
  let underscores = wordToGuessArr.map((el) => "_");
  convertedWordToGuess = underscores.join("");
  updateDOM();
};

const handleKeyUp = (e) => {
  let userInput = e.key;
  if (incorrectLetters.includes(userInput) || !isAlpha(userInput)) {
    console.log("returning");
    return;
  }

  if (wordToGuess.includes(userInput)) {
    console.log("word contains letter");
    let matchingIndexes = [];
    for (let i = 0; i < wordToGuessArr.length; i++) {
      if (wordToGuessArr[i] === userInput) {
        matchingIndexes.push(i);
      }
    }
    matchingIndexes.forEach((idx) => {
      convertedWordToGuess = `${convertedWordToGuess.substring(
        0,
        idx
      )}${userInput}${convertedWordToGuess.substring(idx + 1)}`;
    });
  } else {
    console.log("word does not contain letter");
    incorrectLetters.push(userInput);
    remainingGuesses--;
  }

  updateGameState();
  updateDOM();
};

const isAlpha = (char) => /^[a-z]$/i.test(char);

const updateGameState = () => {
  let gameOver = false;
  if (!convertedWordToGuess.includes("_")) {
    wins++;
    gameOver = true;
  }

  if (remainingGuesses === 0) {
    losses++;
    gameOver = true;
  }

  if (gameOver) {
    resetGame();
    selectWord();
  }
};

const resetGame = () => {
  previousWord = wordToGuess;
  incorrectLetters = [];
  remainingGuesses = 10;
};

const updateDOM = () => {
  document.getElementById("word-to-guess").innerHTML = convertedWordToGuess;
  document.getElementById("incorrect-letters").innerHTML = incorrectLetters;
  document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("previous-word").innerHTML = previousWord;
};

document.addEventListener("keyup", handleKeyUp);

document.onload = selectWord();
