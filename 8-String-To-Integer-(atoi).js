/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();

    s = parseInt(s);

    if(isNaN(s)){
        s = 0;
    }
    else{
        if(s < -Math.pow(2, 31)){
            s = -Math.pow(2, 31);
        }
        else if(s > Math.pow(2, 31) - 1){
            s = Math.pow(2, 31) - 1;
        }
    }

    return s
};



var s = "words and 987";
console.log(myAtoi(s));