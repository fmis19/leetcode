/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var newDigits = [];

    var sum = digits.pop() + 1;
    var rest = 0;
    if(sum <= 9){
        newDigits.unshift(sum);
    }
    else{
        newDigits.unshift(0);
        rest = 1;
    }

    while(digits.length > 0){
        var temp = digits.pop();
        if(temp + rest <= 9){
            newDigits.unshift(temp + rest);
            rest = 0;
        }
        else{
            newDigits.unshift(0);
            rest = 1;
        }
    }

    if(rest == 1){
        newDigits.unshift(rest);
    }

    return newDigits;
    
};



var digits = [9];
console.log(plusOne(digits));