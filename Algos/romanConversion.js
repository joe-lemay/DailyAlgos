var inputRoman = "LVII"

function romanToInt(s){
    var romanDict = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    var result = 0;
    for(var i = 0; i < s.length; i++){
        if(i+1 < s.length && romanDict[s[i]] < romanDict[s[i+1]]){
            result -= romanDict[s[i]]
            continue
        }
        result += romanDict[s[i]]
    }
    return result;
}
console.log(romanToInt(inputRoman));
