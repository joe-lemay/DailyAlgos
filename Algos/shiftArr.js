// function arrayRotate(arr, shiftBy) {
//     if (shiftBy > 0) {
//         while (shiftBy > 0) {
//             arr.unshift(arr.pop());
//             shiftBy--;
//         }
//     }
//     else {
//         while (shiftBy < 0) {
//             arr.push(arr.shift());
//             shiftBy++
//         }
//     }
//     return arr;
// }   

function shiftArr(arr, step) {
    if(step == 0){return arr}
    if(step<0){

        if(step > arr.length){
            step = arr.length % step
        }
        for(var j = 0; j<=step; j++){
            let temp = arr[0];
            for (var i = 1; i < arr.length; i++) {
                arr[i - 1] = arr[i];
            }
            arr[arr.length - 1] = temp;
        }
    }
    if(step>0){
        for(var j = 0; j<=step; j++){
            let temp = arr[arr.length-1];
            for (var i = arr.length - 2; i >= 0; i--) {
                arr[i + i] = arr[i];
            }
            arr[0] = temp;
        }
    }
    return arr
}


function shiftBack(arr, step){
    for(var j = 0; j<=step-1; j++){
        let temp = arr[0];
        for (var i = 1; i < arr.length; i++) {
            arr[i - 1] = arr[i];
        }
        arr[arr.length - 1] = temp;
    }
    return arr
}

function shiftForward(arr, step){
    for(var j = 0; j<step; j++){
        let temp = arr[arr.length-1];
        for (var i = arr.length-2; i >= 0; i--) {
            arr[i + 1] = arr[i];
        }
        arr[0] = temp;
    }
    return arr
}

function shiftArr(arr,step){
    if(step == 0){return arr};
    if(step>0){
        if(step>arr.length){
            step = arr.length%step
        }
        return shiftForward(arr, step)
    }
    if(step<0){
        step = Math.abs(step)
        return shiftBack(arr,step)
    }
}

console.log(shiftArr([1,0,0,0,0,0,0,0], 3))
console.log(shiftArr([1,0,0,0,0,0,0,0], -3))