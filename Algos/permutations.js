/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    solution = []
    if(nums.length == 1){
        solution.push(nums)
        return solution
    }
    console.log(solution)
    nums.pop()
    for(let num in nums){
        permute(nums)
    }
};

let list = [1,2,3,4,5]
permute(list);