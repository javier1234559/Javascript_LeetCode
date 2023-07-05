"use strict";
//Array
//Two Pointers
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Object.defineProperty(exports, "__esModule", { value: true });
function removeDuplicates(nums) {
    // base
    let n = nums.length;
    if (n < 2)
        return;
    //define 2 point
    let point1 = 0, point2 = 1;
    //main execute
    while (point2 < n) {
        if (nums[point1] !== nums[point2]) {
            point1++;
            nums[point1] = nums[point2];
        }
        point2++;
    }
    return point1 + 1;
}
;
