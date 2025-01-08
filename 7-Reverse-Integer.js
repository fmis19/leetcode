/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if(x < 0){
        var number = String(Math.abs(x)).split("").reverse().join("");
        number = parseInt("-".concat(number));

        
        if(number < -Math.pow(2, 31)){
            return 0;
        }
    }
    else{
        var number = parseInt(String(x).split("").reverse().join(""));
        if(number > Math.pow(2, 31) - 1){
            return 0;
        }
    }

    return number;
};


var x = -1563847412;
console.log(reverse(x));