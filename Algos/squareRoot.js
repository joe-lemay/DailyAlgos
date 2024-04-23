var mySqrt = function(x) {
    if(x==0){
        return 0
    }
    let result = 0;
    let i = 1;
    while(result < x){
        result = i * i;
        if(result<x){
            i++
        }
    }
    return i-1
};

console.log(mySqrt(8));