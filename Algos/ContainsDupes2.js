function dupes2(nums, k){
    for(var i = 0; i < nums.length; i++){
        for(var j = i; j < nums.length; j++){
            if(nums[i] == nums[k] && Math.abs(i-j)){
                return true
            }
        }
    }return false
}