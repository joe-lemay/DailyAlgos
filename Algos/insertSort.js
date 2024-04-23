
randArr= [2,5,3,6,8,7,11,9]

function inlineSort(arr){
    for(let i = arr.length-1;i>=0; i--){
        if(arr[i]<arr[i-1]){
            let temp = arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=temp
            console.log(arr)
        }
    }
    return arr
}

console.log(inlineSort(randArr))