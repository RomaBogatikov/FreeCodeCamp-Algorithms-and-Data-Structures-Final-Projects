/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
//This function converts decimal numbers <4000 into a roman numeral

function convertToRoman(num) {
    let arr = num.toString().split('');     //split 'num' into an array
    console.log('arr = ', arr);             //for debugging purposes
    const numerals = {                      //create an object with all the Roman numerals
        1: ['I', 'V', 'X'],
        2: ['X', 'L', 'C'],
        3: ['C', 'D', 'M'],
        4: ['M']
    }
    console.log('arr.length = ', arr.length);   //for debugging purposes
    
    let final = [];                             //array to store our final Roman numeral
    for (let i = 0; i < arr.length; i++) {      //iterate over each digit in 'num' and convert it to Roman numeral using 'numerals' object
        let result = [];                        //array to store each digit of a 'num' represented as Roman numeral

        if ((arr[arr.length - i - 1] >= 1) && (arr[arr.length - i - 1] <= 3)) { //if digit from the end in 'num' is between 1 and 3 inclusive
            console.log('arr[arr.length - i - 1] = ', arr[arr.length - i - 1]); //for debugging purposes
            for (let j = 0; j < arr[arr.length - i - 1]; j++) {                 // repeat adding 'I', 'X', 'C', or 'M' from 'numerals' object
                result.push(numerals[i+1][0]) 
            }
        }  

        else if ((arr[arr.length - i - 1] >= 4) && (arr[arr.length - i - 1] <= 8)) {        //if digit from the end in 'num' is between 4 and 8 inclusive
            result.push(numerals[i+1][1]);      //add Roman numeral 'V', 'L', or 'D' (which stands for 5)
            console.log('result = ', result)    // for debugging purposes
            if (arr[arr.length - i - 1] == 4) { //if digit is 4, add Roman 'I', 'X', 'C', or 'M' from the left
                result.unshift(numerals[i+1][0])
            }
            if ((arr[arr.length - i - 1] >= 6) && (arr[arr.length - i - 1] <= 8)) { //if digit from the end in 'num' is between 6 and 8 inclusive
                for (let j = 0; j < arr[arr.length - i - 1]- 5; j++) {      // add as many Roman 'I', 'X', 'C', or 'M' as the difference between digin and number 5
                    result.push(numerals[i+1][0])
                }
            }
        } 

        else if (arr[arr.length - i - 1] == 9) {        // if digit from the end in 'num' is 9
            result.push(numerals[i+1][2]);              // add Roman 'X', 'C', or 'M'
            result.unshift(numerals[i+1][0])            // and then add Roman 'I', 'X', or 'C'
        }

        final.unshift(result.join(''));
        console.log('final = ', final)
    }

    return final.join('');
   }
   
   console.log(convertToRoman(3999));