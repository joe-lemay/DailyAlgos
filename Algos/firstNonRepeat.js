const nums1 = [3, 5, 4, 3, 4, 6, 5];
const expected1 = 6;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    for(var i = 0; i < nums.length; i++){
        var check = false
        for(var j = 0; j <nums.length; j++){
            if(i != j && nums[i] == nums[j]){
                check = true
            }
        }
        if(check == false){
            return nums[i]
        }
    }return null
}

console.log(firstNonRepeated(nums1))
