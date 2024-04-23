export function arrayOddOccurances(arr) {
    var obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += 1
        }
        else {
            obj[arr[i]] = 1
        }
    }
    for (let num in obj) {
        if (obj[num] % 2 === 1) {
            return parseInt(num)
        }
    }

}