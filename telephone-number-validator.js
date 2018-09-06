/*
JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/


function telephoneCheck(str) {
    
    let numOfDigits = (str.match(/[0-9]/g)).length; //count number of digits in 'str'
    
    function check10(array) {   //checks if number is a telephone number when it contains 10 digits
        if (isNaN(parseInt(array[0], 10)) != true) {    //if the first element in an array is a number
            //return true if all elements are numbers except elements in positions 3 and 7 that can be ' ' or '-'
            return array.every((element, index) => isNaN(parseInt(element, 10)) != true || ((element == ' ' || element == '-') && (index == 3 || index == 7)))
        }
        else if (array[0] == '(' && array[4] == ')') {  //if the first 3 digits in an array are enclosed in (brackets)
            //return true if all elements are numbers and element with index 8 can be either ' ' or '-' and element with index 5 can be ' ' and element with index 9 can be '-'
            return array.every((element, index) => isNaN(parseInt(element, 10)) != true || (((element == ' ' || element == '-' ||element == '(' || element == ')') && (index == 8 || index == 0 || index == 4)) || (element == ' ' && index == 5) || (element == '-' && index == 9)))
        } 
        else {return false} //if two conditions above are not satisfied, return false
    }
    
    if (numOfDigits == 10) {        //if number of digits is 10
        let array = str.split('');  //split 'str' into an array
        return check10(array)       //return function check10
    }

    else if (numOfDigits == 11) {   //if number of digits is 11
        let array = str.split('');
        if (array[0] == 1 && array[1] == ' ') { //and if first number in array is 1 followed by ' '
            array.shift();
            array.shift();                      //remove first two elements
            return check10(array)               //return function check10

        } else if (array[0] == 1 && array[1] == '(') {  //if first number is 1 and second element is '('
            array.shift();                              //remove first number
            return check10(array)                       //return function check10

        } else {return false}                           //if two conditions above are not satisfied, return false
    } 
    else {return false}                          //if two conditions above (number of digits is 10 or 11) are not satisfied, return false
}
        
      
  console.log(telephoneCheck("555-555-5555"), ' should return a boolean.');
  console.log(telephoneCheck("1 555-555-5555"), ' should return true.');
  console.log(telephoneCheck("1 (555) 555-5555"), ' should return true.');
  console.log(telephoneCheck("5555555555"), ' should return true.');
  console.log(telephoneCheck("555-555-5555"), ' should return true.');
  console.log(telephoneCheck("(555)555-5555"), ' should return true.');
  console.log(telephoneCheck("1(555)555-5555"), ' should return true.');
  console.log(telephoneCheck("555-5555"), ' should return false.');
  console.log(telephoneCheck("5555555"), ' should return false.');
  console.log(telephoneCheck("1 555)555-5555"), ' should return false.');
  console.log(telephoneCheck("1 555 555 5555"), ' should return true.');
  console.log(telephoneCheck("1 456 789 4444"), ' should return true.');
  console.log(telephoneCheck("123**&!!asdf#"), ' should return false.');
  console.log(telephoneCheck("55555555"), ' should return false.');
  console.log(telephoneCheck("(6054756961)"), ' should return false');
  console.log(telephoneCheck("2 (757) 622-7382"), ' should return false.');
  console.log(telephoneCheck("0 (757) 622-7382"), ' should return false.');
  console.log(telephoneCheck("10 (757) 622-7382"), ' should return false.');
  console.log(telephoneCheck("27576227382"), ' should return false.');
  console.log(telephoneCheck("(275)76227382"), ' should return false.');
  console.log(telephoneCheck("2(757)6227382"), ' should return false.');
  console.log(telephoneCheck("2(757)622-7382"), ' should return false');
  console.log(telephoneCheck("555)-555-5555"), ' should return false.');
  console.log(telephoneCheck("(555-555-5555"), ' should return false.');
  console.log(telephoneCheck("(555)5(55?)-5555"), ' should return false.');
 