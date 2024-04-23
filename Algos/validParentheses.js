
var string1 = "()[]{}"

function isValid(s){
    var count = 0;
    for(var i = 0; i <= s.length; i++){
        if(s[i] == '(' || s[i] == '{' || s[i] == '['){
            count++
        }else{
            count--
        }
    }
    if(count != 0){
        return true
    }else{
        return false
    }
}

console.log(isValid(string1));