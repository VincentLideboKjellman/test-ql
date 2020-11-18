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
const oddSum = () => {
    
}


const Algorithms = () => {
  return (
    <div>
        
    </div>
  );
}

export default Algorithms;