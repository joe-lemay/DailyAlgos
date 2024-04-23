var strArr = ["eat","tea","tan","ate","nat","bat"]

var groupAnagrams = function (strs) {
    var sortedArr = [];
    for (var i = 0; i < strs.length; i++) {
        sortedArr[i]= [strs[i]];
        for (var j = i + 1; j < strs.length; j++)
            if (strs[i].sort((a, b) => a - b) == strs[j].sort((a, b)=> a - b)){
                sortedArr[i].push(strs[j])
                strs.splice(j,1)
                j--
            }
    }return sortedArr;
};

console.log(groupAnagrams(strArr))