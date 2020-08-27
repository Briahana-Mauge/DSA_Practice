/*
LeetCode #35

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0
*/

const searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let index = nums[mid];

        if (target === index) {
            return mid;
        } else if (target < index) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    if(target < low){
        return low
    }else{
        return high +1;
    }
    
    return -1;
}

let arr = [1,3,5,6];

console.log(searchInsert(arr, 5)); // 2
console.log(searchInsert(arr, 2)); // 1
console.log(searchInsert(arr, 7)); // 4
console.log(searchInsert(arr, 0)); // 0