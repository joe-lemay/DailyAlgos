var num = 353

function numPalindrome(x) {
    var revX = x.toString().split('').reverse().join('');
    if(x == revX){
        return true
    }
    return false
}

console.log(numPalindrome(num))