
function diaMatrix(matrix){
    var largestTotal = 0
    var l = matrix.length
    for(var i=0; i<l; i++){
        for(var j=0;j<l/2; j++){
            var frontSum =+ matrix[i][j]
            var backSum =+ matrix[i][l-j-1]
        }
        if(frontSum < backSum){
            matrix[i].reverse()
        }
        console.log(matrix[i])
    }

    for(var i=0; i<l/2; i++){
        var topSum =0
        var botSum =0
        for( j=0; j<l; j++){
            if(j<l/2){
                topSum = topSum + matrix[j][i]
                console.log(matrix[j][i])
            }else{
                botSum = botSum + matrix[j][i]
                console.log(matrix[j][i])
            }
            console.log("The top sum is now: "+ topSum)
            console.log("The bottom sum is now: "+ botSum)

    }
    if(topSum > botSum){
        largestTotal += topSum
        console.log("The largest total is now: "+ largestTotal)
    }else{
        largestTotal += botSum
    }
    }
    return largestTotal
}


var matrix =
    [
        [112, 42, 83, 119],
        [56, 125, 56, 49],
        [15, 78, 101, 43],
        [62, 98, 114, 108]
    ]

function onlineSolution(a){
    var sum = 0;
    var n = a.length
    for (var i = 0; i < n / 2; i++){
        for (var j = 0; j < n / 2; j++){
            sum += Math.max(a[i][j], a[i][n - j - 1], a[n - i - 1][j], a[n - i - 1][n - j - 1]);
        }
    }
    return sum
}
console.log(onlineSolution(matrix))


9875
9+8+7+5
29
2+9
11
1+1
2