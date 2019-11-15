/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let isEven = true; 
          
    for (let i = 1; i <= someNum; i++)  {
        isEven = !isEven; 
    }
    console.log(isEven);
    
    return isEven; 
}

// isEven(5)