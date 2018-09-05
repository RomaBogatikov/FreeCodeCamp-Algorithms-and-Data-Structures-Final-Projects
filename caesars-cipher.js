/*

JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function rot13(str) { 
    //create an array of all letters in alphabet
    let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
    let array = str.split('');  //split 'str' into array

    const result = array.reduce((total, value) => { //iterate over array with reduce()
        let index = alph.indexOf(value);            //index in 'alph' of each element ('value') in 'array'
        if (index >= 0) {                           //if 'value' exists in 'alph' (its index is >= 0)
            if (index >= 13) {                      //if index of 'value' in 'alph' is >= 13
                total.push(alph[index - 13])        //push an element from 'alph' with index of [index - 13] to total
            } else { total.push(alph[25 -(13 - index - 1)])}    //otherwise push element from 'alph' with index of [25 - (13 - index - 1)]
        } else {total.push(value)}                  //if 'value' doesn't exist in 'alph', push 'value' to 'total'
        return total
    }, [])
    return result.join('');
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));