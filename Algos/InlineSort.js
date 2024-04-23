function sorter(arr){
    for(var i = arr.length-1; i > 0; i--){
        for(var j = 0; j<arr.length - i; j++){
            var maxPos = 0;
            var maxInt = 0;
            if(arr[j] > arr[maxPos]){
                maxInt = arr[j]
                maxPos = j
            }
            var temp = arr[i];
            arr[i] = maxInt;
            arr[maxPos] = temp
        }
    }
    return arr
}

array = [5,4,3,2,1]
console.log(sorter(array));