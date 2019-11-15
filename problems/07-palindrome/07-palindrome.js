/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let splitString = someStr.split(""); 
    let reverseArray = splitString.reverse(); 
    let mergedArray = reverseArray.join("");
    if(mergedArray === someStr) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hotness"));