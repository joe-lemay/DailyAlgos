const nums4 = [1, 2, 1, 1, 2, 3]; // [1, 1, 1, 2, 2, 3]
const k1 = 2; // First 2 most frequent number
// expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums5 = [0, 2, 0, 0, 2, 3]; // [0,0,0,2,2,3]
const k2 = 1; // most frequent number
// expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums6 = [1, 2, 3, 1, 2, 3]; // [1, 1, 2, 2, 3, 3]
const k3 = 3;
// expected3 = [1, 2, 3];
/* 
Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * nums.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
function kMostFrequent(nums, k) {
    let freqTable = {};
    let sortedCount = [];
    let results = [];
    let uniqueCount = 0;
    for(i in nums){
        if(freqTable[nums[i]]){
            freqTable[nums[i]]++;
        }
        else{
            freqTable[nums[i]] = 1;
        }
    }
    for(i in freqTable){
        let countObj = {};
        countObj.value = i;
        countObj.count = freqTable[i];
        sortedCount.push(countObj);
    }
    sortedCount.sort((a, b) => (a.count < b.count) ? 1:-1);
    for(i in sortedCount){
        results.push(parseInt(sortedCount[i].value));
        if(sortedCount[i.value] != results[results.length -1]){
            uniqueCount++
        }
        if(uniqueCount>=k){
            return results
        }
    }
    return results
}

console.log(kMostFrequent(nums6,3));

function kMostFrequentRevised(nums, k) {
    let freqTable = {};
    let sortedCount = [];
    let results = [];
    let uniqueCount = 0;
    for(i in nums){
        if(freqTable[nums[i]]){
            freqTable[nums[i]]++;
        }
        else{
            freqTable[nums[i]] = 1;
        }
    }
    for(i in freqTable){
        let countObj = {};
        countObj.value = i;
        countObj.count = freqTable[i];
        sortedCount.push(countObj);
    }
    sortedCount.sort((a, b) => (a.count < b.count) ? 1:-1);
    for(i in sortedCount){
        results.push(parseInt(sortedCount[i].value));
        if(sortedCount[i.value] != results[results.length -1]){
            uniqueCount++
        }
        if(uniqueCount>=k){
            return results
        }
    }
    return results
}

console.log(kMostFrequent(nums6,3));