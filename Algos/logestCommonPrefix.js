var thing1 = ["flower","flow","flight"];
var thing2 = ["hello","hell no","hellen"];

var longestCommonPrefix = function(strs) {
    var count = 0;
    var longCom = "";
    var isCommon = true;
    while(isCommon){
        var thisSet = new Set()
        strs.forEach((element)=>{
            var letter = element[count];
            thisSet.add(letter);
            })
        if(thisSet.size == 1){
            longCom += [...thisSet];
            count++
        }
        else{
            isCommon = false;
        }
    }
    return longCom;
}

console.log(longestCommonPrefix(thing1));
console.log(longestCommonPrefix(thing2));