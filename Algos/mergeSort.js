/* 
    Stable sort.

    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

    Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.

    Space: O(n) linear

steps:    
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
        - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */


    // Hint: We'll want to track our left/right index positions. This does not need to be in place, so you can push them into a new array.
    // Due to not knowing the lengths of the submitted arrays, while loops are recommended.

    // If we have two arrays that are different lengths, we'd want to handle for that and be ready to push any remaining values too!


function merge(left = [], right = []) {
    let mergedArr = [];
    let l = 0;
    let r = 0;
    while(left[l] && right[r]){
        if(left[l] >= right[r]){
            mergedArr.push(right[r]);
            r++
        }
        else{
            mergedArr.push(left[l]);
            l++
        }
    }
    !right[r] ? mergedArr = [...mergedArr, ...left.splice(l,left.length)]  : mergedArr = [...mergedArr, ...right.splice(r,right.length)];
    return mergedArr;
}

console.log(merge(sortedA4,sortedB4));


// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(numbers = []) {
    if(numbers.length<=1){
        return numbers
    }
    let mid = Math.ceil((numbers.length-1)/2);
    let left = numbers.slice(0,mid);
    let right = numbers.slice(mid);
    return mergeSort(left),mergeSort(right);
    }
    // Hint: We could potentially use built ins like slice to help us here! arrayName.slice(startIdx, endIdx)
    // Goal: To recursively chop up the array down to a single value, then merge back up into an array in a sorted order until completed.

    // When sorting our left/right portions we can use this function recursively and split it again. 
    // --- Can help to check binarySearch since it's similar!

console.log(mergeSort(numbersRandomOrder));

/*****************************************************************************/