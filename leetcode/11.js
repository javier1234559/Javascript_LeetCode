"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxArea(height) {
    let n = height.length;
    let Maxarea = Number.MIN_VALUE;
    if (n < 2) {
        Maxarea = height[0];
        return Maxarea;
    }
    //define 2 pointers
    let left = 0;
    let right = n - 1;
    //excute main logic
    while (right > left) {
        let waterheight = Math.min(height[left], height[right]);
        let area = Math.abs(right - left) * waterheight;
        Maxarea = Math.max(area, Maxarea);
        //we already have largest width when start at the end
        //so target is to find the highest vertical lines 
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return Maxarea;
}
;
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
