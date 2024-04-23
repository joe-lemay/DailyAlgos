var myString = "dvdf";

function longSubstring(str){
    var temp = "";
    var tempCount = 0;
    for(var i=0; i<str.length; i++){
        if(!temp.includes(str[i])){
            temp += str[i];
            tempCount = temp.length
            console.log(temp)
        }
        else{
            if(tempCount < temp.length){
            tempCount = temp.length
        }
            temp = str[i];
        }
    }return tempCount
}
console.log(longSubstring(myString))
