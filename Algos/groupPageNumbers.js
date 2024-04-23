var somePages = [1,3,4,5,6,7,9,11,34]

function pageNums(arr){
    var newStr = ""
    var jumping = false
    for( var i = 0; i <arr.length;i++){
        if(arr[i]+1 != arr[i+1] && jumping == true){
            newStr += "-" + arr[i].toString() + ", "
            jumping = false
            continue
        }
        if(arr[i]+1 != arr[i+1] && jumping == false){
            newStr += arr[i].toString()
            if(i<arr.length-1){
                newStr += ", "
            }
        }
        if(arr[i]+1 == arr[i+1] && jumping == false){
            newStr += arr[i].toString()
            jumping = true
            continue
        }
    }
    return newStr
}
console.log(pageNums(somePages));