var arr1 = [1,1,1,1,1,1,1,1]
var arr2 = [2,2,2,2,2,2,2,2,2,2,2,2]

function zipArrays(arrayA, arrayB) {
    var zippedArray = []
    var largeArray = arrayB
    var smallArray = arrayA
    if (arrayA.length > arrayB.length) {
        largeArray = arrayA
        smallArray = arrayB
    }
    for (var i = 0; i < largeArray.length; i++) {
        if (i < smallArray.length) {
            zippedArray.push(smallArray[i])
        }
        zippedArray.push(largeArray[i])
    }
    return zippedArray
}
console.log(zipArrays(arr1,arr2))