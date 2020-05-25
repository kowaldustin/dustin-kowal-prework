var currentWordPara = document.getElementById("currentWord");
var guessRemain = document.getElementById("guessRemain");
var lettersGuessed = document.getElementById("lettersGuessed");
var winCountPara = document.getElementById("winCount");
const answerArray = [];
const wrongCharArray = [];
//const currentWordArray = [];
var winCount = 0;
var numGuesses;
var currentWord;
var guessKey;
var correctLetter = false;

const wordList = ["test", "testy", "tester", "testing", "tested"];

//choosen word is replaced with
function gameSetup() {
    //resets number of guesses
    numGuesses = 12;
    guessRemain.innerHTML = numGuesses;

    //randomly chooses a word from wordList
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];

    //ensures arrays are empty when starting a new game
    answerArray.length = 0;
    wrongCharArray.length = 0;

    for (let i = 0; i < currentWord.length; i++) {
        answerArray[i] = "__";
    }

    lettersGuessed.innerHTML = wrongCharArray.join(" ");
    currentWordPara.innerHTML = answerArray.join(" ");
    console.log(currentWord);
}

function checkLetter() {
  document.onkeyup = function(event) {
    guessKey = event.key.toLowerCase();
    for (let i = 0; i < currentWord.length; i++) {
      if (guessKey === currentWord[i]) {
        answerArray[i] = guessKey;
        currentWordPara.innerHTML = answerArray.join(" ");
        correctLetter = true;
      }
    }

    //runs when answer array still has blanks
    if(answerArray.includes("__")){
        
        //checks if wrong letter is already in each array
        if(!answerArray.includes(guessKey) && !wrongCharArray.includes(guessKey)){

            wrongCharArray.push(guessKey);
            lettersGuessed.innerHTML = wrongCharArray.join(" ");

            //decreases number of guesses if it was an incorrect letter
            numGuesses--;
            guessRemain.innerHTML = numGuesses;
            //starts new game if number of guesses hits 0
            if(numGuesses < 1){
                newGame();
            }
        }
    }
    else{
        //increases wins once loop is finished if the answer array is filled with letters
        winCount++;
        winCountPara.innerText = winCount;

        newGame();
    }
  }
    //testCount++;
    //lettersGuessed.innerHTML = testCount;
}

newGame();


function newGame(){
    gameSetup();
    checkLetter();
}