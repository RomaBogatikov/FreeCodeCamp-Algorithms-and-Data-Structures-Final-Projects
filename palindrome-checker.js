/*

JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case 
(lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function palindrome(str) {
    // Good luck!
    let str1 = str.replace(/\W|[_]/g, '').toLowerCase();    //select non alpha-numeric characters and underscore + make it lowercase
    let array = str1.split('');                             //split a string into an array  
    console.log('str1 = ', str1);                           //for debugging purposes
       
    function checkPalindrome (element, index) {             //iterate over elements and compare each element to a corresponding from the end
        return element == array[array.length - 1 - index];
    }
    return array.every(checkPalindrome)
}
  
console.log("eye");
console.log("_eye");
console.log("race car");
console.log("not a palindrome");
console.log("A man, a plan, a canal. Panama");
console.log("never odd or even");
console.log("nope");
console.log("almostomla");
console.log("My age is 0, 0 si ega ym.");
console.log("1 eye for of 1 eye.");
console.log("0_0 (: /-\ :) 0-0");
console.log("five|\_/|four");


