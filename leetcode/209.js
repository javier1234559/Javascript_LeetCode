"use strict";
//Sliding Window
//Array
//https://leetcode.com/problems/minimum-size-subarray-sum/description/
Object.defineProperty(exports, "__esModule", { value: true });
function minSubArrayLen(target, nums) {
    //define pointer
    let left = 0;
    let right = 0;
    //define flag
    let sum = 0;
    let minResult = Number.MAX_VALUE;
    while (right < nums.length) {
        sum += nums[right]; //add current element
        while (target <= sum) { // contract window
            minResult = Math.min(minResult, right - left + 1);
            sum -= nums[left++];
        }
        right++;
    }
    return minResult === Number.MAX_VALUE ? 0 : minResult;
}
;
console.log(minSubArrayLen(4, [1, 4, 4]));
