/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    var a = 1, b = 0, temp;

    while (n >= 0){
      temp = a;
      a = a + b;
      b = temp;
      n--;
    }    
    return b;    
}