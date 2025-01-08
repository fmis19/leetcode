/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    }

    digits = digits.split("");

    // console.log(digits)

    // for(var i = 0; i < digits.length; i++){
    //     console.log(map[digits[i]]);
    // }
    var array = [];

    if(digits.length === 1){
        array = map[digits];
    }
    else if(digits.length === 2){
        for(var i = 0; i < map[digits[0]].length; i++){
            for(var j = 0; j < map[digits[1]].length; j++){
                // console.log(map[digits[0]][i] + map[digits[1]][j]);
                array.push(map[digits[0]][i] + map[digits[1]][j]);
            }
        }
    }
    else if(digits.length === 3){
        for(var i = 0; i < map[digits[0]].length; i++){
            for(var j = 0; j < map[digits[1]].length; j++){
                for(var k = 0; k < map[digits[2]].length; k++){
                    // console.log(map[digits[0]][i] + map[digits[1]][j] + map[digits[2]][k]);
                    array.push(map[digits[0]][i] + map[digits[1]][j] + map[digits[2]][k]);
                }
            }
        }
    }
    else if(digits.length === 4){
        for(var i = 0; i < map[digits[0]].length; i++){
            for(var j = 0; j < map[digits[1]].length; j++){
                for(var k = 0; k < map[digits[2]].length; k++){
                    for(var l = 0; l < map[digits[3]].length; l++){
                        // console.log(map[digits[0]][i] + map[digits[1]][j] + map[digits[2]][k] + map[digits[3]][l]);
                        array.push(map[digits[0]][i] + map[digits[1]][j] + map[digits[2]][k] + map[digits[3]][l]);
                    }
                }
            }
        }
    }
    return array;
};


var digits = "2";
console.log(letterCombinations(digits));