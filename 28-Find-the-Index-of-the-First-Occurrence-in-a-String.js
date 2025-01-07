/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.search(needle);
};


var haystack = "sadbutsad";
var needle = "sad";

console.log(strStr(haystack, needle));