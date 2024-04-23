const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    hash = {}
    tL = ""
    tN = ""
    for (i in s){
        if(isNaN(s[i]) && tL == ""){
            tL = s[i]
            console.log(tL)
        }
        if(!isNaN(s[i])){
            tN += s[i]
            console.log(tN)
        }
        if(!isNaN(s[i]) && isNaN(s[i+1])){
            if(hash[tL]){
                hash[tL] += parseInt(tN)
                console.log(hash[tL])
                tL = ""
                tN = ""
            }
            else{
                hash[tL] = parseInt(tN)
                console.log("Setting " + tL + " to " + hash[tL])
                tL = ""
                tN = ""
            }
        }
    }
    return hash
}

// I got nothing Joe!
// You didn't assign anything to the hashmap
console.log(rehash(str1))