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

const updateDOM = () => {
  document.getElementById("word-to-guess").innerHTML = convertedWordToGuess;
  document.getElementById("incorrect-letters").innerHTML = incorrectLetters;
  document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
};

document.onload = selectWord();
