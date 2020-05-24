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

const wordList = ["test", "testy", "tester", "testing", "tested"];

//choosen word is replaced with
function gameSetup() {
    //resets number of guesses
    numGuesses = 12;
    guessRemain.innerHTML = numGuesses;
    //randomly chooses a word from wordList
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];

    for (let i = 0; i < currentWord.length; i++) {
        answerArray[i] = "__";
    }

    document.getElementById("currentWord").innerHTML = answerArray.join(" ");
    console.log(currentWord);
}

function checkLetter() {
  document.onkeyup = function(event) {
    guessKey = event.key.toLowerCase();
    for (let i = 0; i < currentWord.length; i++) {
      if (guessKey === currentWord[i]) {
        answerArray[i] = guessKey;
        document.getElementById("currentWord").innerHTML = answerArray.join(" ");
      }
    }
    
    if(answerArray.includes("__")){
        //decreases number of guesses if it was an incorrect letter
        if(!answerArray.includes(guessKey)){
            numGuesses--;
            guessRemain.innerHTML = numGuesses;
        }
    }
    else{
        //increases wins once loop is finished if the answer array is filled with letters
        //FIXME when program ends count increases with every key press
        winCount++;
        winCountPara.innerText = winCount;
    }
  }
}

gameSetup();
checkLetter();