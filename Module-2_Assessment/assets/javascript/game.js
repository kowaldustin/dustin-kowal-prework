document.addEventListener('keyup', playHangman);
const possibleWords = [test, testy, tester];
var winCount = 0;

function gameSetup(){
    const guessRemain = document.getElementById("guessRemain");
    const currentWordPara = document.getElementById("currentWord");
    const currentWordArray = [];

    const currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    currentWordArray = Array.from(currentWord);

    guessRemain.innerText = 12;

    return currentWordArray;
}

function playHangman(){
    const currentWordPara = document.getElementById("currentWord");
    const guessRemain = document.getElementById("guessRemain");
    const lettersGuessed = document.getElementById("lettersGuessed");
    const winCountPara = document.getElementById("winCount");
    const currentWordArray = gameSetup();
    const answerArray = [];
    const wrongCharArray = [];

    var answerText = "";
    var wrongChars = "";
    var numGuesses = 12;

    //populates answerArray
    for(let i = 0; i < currentWord.length(); i++){
        answerArray.push("_");
    }
    

    while(remainingLetters > 0 || numGuesses > 0){ 
        var guess = event.key;

        //creates current word paragraph with blanks and/or characters
        for(let i = 0; i < answerArray.length; i++){
            answerText = answerArray[i] + " ";
        }
        currentWordPara.innerText = answerText;

        //checks for matching characters
        for(let i = 0; i < answerArray.length; i++){
            if(guess === currentWordArray[i]){
                answerArray[i] = guess;
                remainingLetters--;
            }
            else{
                numGuesses--;
                guessRemain.innerText = numGuesses;
                wrongCharArray.push(guess);
            }
        }

        //creates list of wrong characters entered
        for(let i = 0; i < wrongCharArray.length; i++){
            wrongChars = wrongCharArray[i] + " ";
        }
        lettersGuessed.innerText = wrongChars;
    }

    //increases wins once while loop is finished
    winCount++;
    winCountPara.innerText = winCount;
}