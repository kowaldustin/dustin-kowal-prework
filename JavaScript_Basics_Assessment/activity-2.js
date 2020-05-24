function namePrompt(){
    const name = prompt("Please Enter Your Name");

    if(name.length() > 4){
        alert("Your name is greater than four characters!");
    }
    else if(name.length() < 4){
        alert("Your name is less than four characters!")
    }
    else{
        alert("Your name is four characters!")
    }
}