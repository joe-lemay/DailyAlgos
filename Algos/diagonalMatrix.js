
function diaMatrix(matrix){

    var sum1 = 0
    var sum2 = 0
    var total = 0
    length = matrix.length
    for(var i = 0;i<matrix.length;i++){
        sum1 += matrix[i][i]
        sum2 += matrix[i][length-i-1]
    }
    total = sum1-sum2
    if(total<0){
        return total*-1
    }
    return total
}
matrix = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]
console.log(diaMatrix(matrix))