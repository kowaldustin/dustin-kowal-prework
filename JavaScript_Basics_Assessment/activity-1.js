function mathQuiz(){
    const numProduct;
    const numQuotient;
    const numRemainder;
    const numError;
    const numSum;
    const boolCompare;

    numProduct = 9 * 9;
    numQuotient = 56 / 12;
    numRemainder = 281 % 9;
    numError = 18 / 0;
    numSum = 56 + 92;
    boolCompare = 52 < 42;

    Console.log("The results of the Math Quiz are: Product = " + numProduct + 
                " Quotient = " + numQuotient +
                " Remainder = " + numRemainder +
                " Divide by Zero = " + numError +
                " Sum = " + numSum +
                " Comparison = " + boolCompare)
}