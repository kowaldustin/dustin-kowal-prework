function studentArray(){
    const studentArray = ["John", "Johnny", "Jenny"];

    for (let i = 3; i > 0; i--){
        const newStudent = prompt("Please Enter a Student's Name");
        studentArray.push(newStudent);
    }

    for (let i = 0; i < studentArray.length(); i++){
        Console.log(studentArray[0]);
    }
}