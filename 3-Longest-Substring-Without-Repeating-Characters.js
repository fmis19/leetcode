/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1){
        return 1;
    }
    var prefix = "";
    var tempPrefix = "";
    for(var i = 0; i < s.length - 1; i++){
        tempPrefix += s[i];
        for(var j = i+1; j < s.length; j++){
            if(!tempPrefix.includes(s[j])){
                tempPrefix += s[j];
            }
            else{
                break;
            }
        }

        console.log(tempPrefix)
        if(tempPrefix.length > prefix.length){
            prefix = tempPrefix;
        }
        tempPrefix = "";
    }

    // console.log(prefix);
    return prefix.length;
};

var s = " ";
console.log(lengthOfLongestSubstring(s));