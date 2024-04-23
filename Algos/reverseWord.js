/*
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";
// console.log(str1.split(" "))

const str2 = "hello";
const expected2 = "hello";

const str3 = "   This  is a   test  ";
const expected3 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    result=""
    arr=wordsStr.split(" ")
    for(var i=arr.length-1; i>=0; i--){
        if(arr[i] !== ""){
            result+=arr[i]
            result+=" "
        }
    }
    wordsStr=result
    console.log(wordsStr)
    return wordsStr
}

reverseWordOrder(str1)
reverseWordOrder(str2)
reverseWordOrder(str3)