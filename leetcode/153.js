"use strict";
//Binary Search by I used two pointers
//744. Find Smallest Letter Greater Than Target
//https://leetcode.com/problems/find-smallest-letter-greater-than-target/
Object.defineProperty(exports, "__esModule", { value: true });
function findMin(nums) {
    //base case
    let n = nums.length;
    if (n < 2)
        return nums[0];
    //define two pointers
    let left = 0;
    let right = n - 1;
    let minNum = Number.MAX_SAFE_INTEGER;
    //solve
    while (left <= right) {
        console.log(left, right);
        if (minNum > nums[left])
            minNum = nums[left];
        if (minNum > nums[right])
            minNum = nums[right];
        left++;
        right--;
    }
    return minNum;
}
;
console.log(findMin([3, 1, 2]));
