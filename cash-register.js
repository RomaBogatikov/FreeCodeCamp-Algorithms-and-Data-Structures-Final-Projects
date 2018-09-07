/*

JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/


function checkCashRegister(price, cash, cid) {
    let change = (cash - price).toFixed(2);     //how much change do we owe?
    let changeDue = change;                     //save 'change' to another variable because we will change 'change later
    const cidSum = cid.reduce((total, value) => {   //find the total sum of cash in drawer with 2 digits after decimal point
        total += value[1]; 
        return total
    }, 0)
        .toFixed(2);

    //console.log('cidSum = ', cidSum);

    let currency = {                //we need the object to set the value of each bill
        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100
    };

    let result = [];                //our accumulator array

    for (let i = cid.length - 1; i >= 0; i--) { //loop over each array in cid starting with the last one
        let bill = currency[cid[i][0]];         //define which bill are we dealing with
        let array = [];                         //an empty array to store 'currency' property and corresponding amount of change
        //console.log('bill = ', bill);
        
        if (cid[i][1] <= change && cid[i][1] != 0) {        //if the amount of money for the current 'currency' property (bill) is less than change we owe and cash-in-drawer is not 0
            array[0] = cid[i][0];           //array[0] = 'currency' property
            array[1] = cid[i][1];           //array[0] = amount of money in that 'currency' property
            //console.log('array = ', array);
            result.push(array);             // push the 'array' to 'result'
            //console.log('result = ', result);
            change = (change - cid[i][1]).toFixed(2);   //calculate how much change do we still owe
        } else if (cid[i][1] > change && cid[i][1] != 0) {  //if the amount of money for the current 'currency' property (bill) is greater than change we owe and cash-in-drawer is not 0
            array[0] = cid[i][0];           //array[0] = 'currency' property
            array[1] = Math.trunc(change / bill) * bill;        //calculate how much change we can give with the current bills
            //console.log('array = ', array);
            if (array[1] != 0) { result.push(array) };      //if the amount of change we can give with current bills is not 0, push it to our 'result
            //console.log('result = ', result);
            change = (change - array[1]).toFixed(2);        ////calculate how much change do we still owe
        }  
    }   
    //console.log('change = ', change)
    //console.log('changeDue = ', changeDue)
    if (change > 0) {           //if we still owe change, return INSUFFICIENT FUNDS
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    } 
    else if (cidSum == changeDue) { //if the amount of change we owe equals to amount of cash-in-drawer, return status:CLOSED
        return {
            status: "CLOSED",
            change: cid
        }
    }
    else {          //otherwise return status: OPEN with the change due in coins and bills, sorted in highest to lowest order
        return {
            status: "OPEN",
            change: result
        }
    }
   
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), ' should return {status: "OPEN", change: [["QUARTER", 0.5]]}');
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), ' should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}');
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), ' should return {status: "INSUFFICIENT_FUNDS", change: []}');
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), ' should return {status: "INSUFFICIENT_FUNDS", change: []}');
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), ' should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}');