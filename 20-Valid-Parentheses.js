/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];

    for (var c = 0; c < s.length; c++) {
        stack.push(s[c]);
    }

    var check = [];

    
    while(stack.length !== 0){
        // console.log(stack.pop());
        var element = stack.shift();

        if(check.length === 0){
            check.push(element);
            continue;
        }
        else{
            if(element === ")"){
                var top = check.pop();
                if(top !== "("){
                    check.push(top);
                    check.push(element);
                }
            }
            else if(element === "]"){
                var top = check.pop();
                if(top !== "["){
                    check.push(top);
                    check.push(element);
                }
            }
            else if(element === "}"){
                var top = check.pop();
                if(top !== "{"){
                    check.push(top);
                    check.push(element);
                }
            }
            else{
                check.push(element);
            }
        }
    }

    return check.length === 0 ? true : false;
};
