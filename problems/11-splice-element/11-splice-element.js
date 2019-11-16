/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    console.log(someArr);
    
    for(let i = index; i < someArr.length; i++) {
        someArr[i] = someArr[i+1];
    }
    console.log(someArr);
    
    someArr = someArr.pop();
    console.log(someArr);
    
}
finalArr = spliceElement([5,4,3,2,1], 3);
console.log(finalArr);



