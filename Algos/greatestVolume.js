const heights1 = [2, 8, 6, 2, 5, 4, 8, 3, 7];
function maxArea(arr){
    let max = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let height = Math.min(arr[i],arr[j])
            let width = Math.abs((i)-(j))
            let area = height* width
            if(area>max){
                max = area
            }
        }
    }
    return max
}
console.log(maxArea(heights1))