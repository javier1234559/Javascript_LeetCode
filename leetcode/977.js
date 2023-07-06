"use strict";
//977. Squares of a Sorted Array
//Two Pointers
//https://leetcode.com/problems/squares-of-a-sorted-array/
Object.defineProperty(exports, "__esModule", { value: true });
function sortedSquares(nums) {
    //base case
    let n = nums.length;
    if (n < 2) {
        nums[0] = nums[0] ** 2;
        return nums;
    }
    //define 2 pointers
    let left = 0;
    let right = n - 1;
    let result = [];
    let i = n - 1;
    while (i >= 0) {
        let check = nums[left] ** 2 < nums[right] ** 2;
        if (check) {
            result[i--] = nums[right] ** 2;
            right--;
        }
        else {
            result[i--] = nums[left] ** 2;
            left++;
        }
    }
    return result;
}
;
console.log(sortedSquares([-5, -3, -2, -1]));
