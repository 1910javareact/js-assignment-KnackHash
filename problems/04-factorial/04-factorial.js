/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum == 0) {
        return 1
    } else {
        return sumNum * factorial(sumNum - 1);
        }
}