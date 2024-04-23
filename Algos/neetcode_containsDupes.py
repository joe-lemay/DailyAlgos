# Given an integer array nums, return true if any value appears at least twice in the array,
# and return false if every element is distinct.

# Example 1:

# Input: nums = [1,2,3,1]
# Output: true
# Example 2:

# Input: nums = [1,2,3,4]
# Output: false
# Example 3:

# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

def find_dupes(numArr):
    hash = {}
    for num in numArr:
        if num in hash:
            hash[num] += 1
        else:
            hash[num] = 1
    for key in hash:
        if hash[key] > 1:
            return True
    return False

numberList = [1,3,5,6,4,7,6,7,3]

print(find_dupes(numberList))