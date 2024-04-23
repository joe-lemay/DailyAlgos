function getNthFib(n){
    let arr = [0,1];
    console.log(arr)
    for(var i = 0; i < n-2; i++){
        [arr[0],arr[1]]=[arr[1],arr[0]];
        arr[1] = arr[0]+arr[1];
        console.log(arr)
    }
    return arr.pop();
}

console.log(getNthFib(11))