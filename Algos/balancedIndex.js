const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;

const numsC = [1,1,1,1,1,9,1,1,1,1,1]
const expectedC = 5

function balanceIndex(nums) {
    leftSum = nums[0]
    rightSum = 0
    for(let i=1; i<nums.length; i++){
        rightSum+=nums[i]
    }
    for(let j = 1; j<nums.length; j++){
        rightSum-=nums[j]
        if(leftSum == rightSum){
            return j
        }
        leftSum+=nums[j]
    }
    return -1
}

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1
console.log(balanceIndex(numsC)) // 5

