function binarySearch(input, target, left = 0, right = input.length - 1 ) {
    var middle = Math.floor((left + right) / 2 );

    if (target === input[middle]) {
        return middle;
    }

    if (left > right) {
        return -1;
    }

    if (target < input[middle]) {
        return binarySearch(input, target, left, right = middle - 1);
    } else {
        return binarySearch(input, target, left = middle + 1, right);
    }
}

function binarySearch2(input, target){
    var start = 0;
    var end = input.length-1
    var mid = Math.floor((input.length -1)/2)
    if(input[mid]==target){
        return true
    }
    if(input.length<1){
        return false
    }
    console.log(input)
    if(mid<target){
        input=input.slice(mid+1,end);
        binarySearch2(input,target)
    }
    else{
        input=input.slice(start,mid-1);
        binarySearch2(input,target)
    }
    return false
}

listOfNum=[1,3,4,5,6,8,9,11,12,15,16]

console.log(binarySearch2(listOfNum,4))