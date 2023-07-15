/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (str) {
    let valid = "",counter = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == '('){
            if(counter > 0){
                valid +=str[i];
            }
            counter++;
        }else if(str[i] == ')'){
            valid +=str[i];
            counter--;
            if(counter == 0){
                valid = valid.slice(0, -1);
            }
        }
    }
    return valid;
};