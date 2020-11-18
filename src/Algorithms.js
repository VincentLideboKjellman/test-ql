import React from "react";

// 1.1 
const removeConsecutive = (input) => {
    // would use regex for more calculations and bigger numbers

    //let splitedString = input.split(/(?!$)/u);
    let splitedString = [...input];
    const removeConsecutiveChar = (arr, len = 0, canDelete = false) => {
    if(len < arr.length){
        if(canDelete){
            arr.splice(len, 1);
             len--;
          }
         return removeConsecutiveChar(arr, len+1, arr[len] === arr[len+3])
     };
    return;
    };
    removeConsecutiveChar(splitedString);
    console.log(splitedString.join(''));
}
removeConsecutive("ffdttttyy");
removeConsecutive("iiikigggg");

// 1.2

// -> get sum of digits from same index [X]
// -> get if odd from those [X]
// -> keep the index and compare with original array index values 
// -> get sum of the two highest
//oddSum([19, 2, 42, 18]);
//oddSum([61, 32, 51]);
//result: 19 + 42 = 61 ????
//result: 61 + 32 = 93
const oddSum = (input) => {
    //let odds = input.filter(n => n%2);
        let sumOfDigits = [];
        input.forEach(function(element) {
            if(element %9 === 0 && element !== 0)
              sumOfDigits.push(9);
            else
              sumOfDigits.push(element%9);
        });
       //sumOfDigits;

    // Checks if odd
    let odds = sumOfDigits.filter(n => n%2);
    console.log(odds);
}
console.log(oddSum([61, 32, 51]))



const Algorithms = () => {
  return (
    <div>
        
    </div>
  );
}

export default Algorithms;