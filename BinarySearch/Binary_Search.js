/*
LeetCode #704

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].
*/
//iteratively
const search = function (nums, target) {
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
    return -1;
};

let arr1 = [-1, 0, 3, 5, 9, 12];
let arr2 = [-1, 0, 3, 5, 9, 12];
let arr3 = [5];

console.log(search(arr1, 9)); // 4
console.log(search(arr2, 2)); // -1
console.log(search(arr3, 5)); // 0