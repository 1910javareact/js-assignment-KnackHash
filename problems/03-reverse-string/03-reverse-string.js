/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
let joinArray = "";
function reverseStr(someStr) {
    let splitString = someStr.split(""); 
    let reverseArray = splitString.reverse(); 
    joinArray = reverseArray.join("");
    // console.log(joinArray)
    return joinArray
}
// reverseStr("Hello")
