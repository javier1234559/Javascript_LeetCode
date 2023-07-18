"use strict";
//Random 
//349. Intersection of Two Arrays
//
Object.defineProperty(exports, "__esModule", { value: true });
function intersection(nums1, nums2) {
    //base case
    let minSize = Math.min(nums1.length, nums2.length);
    //define set
    let set = new Set();
    //add element to set
    let index = 0;
    while (index < minSize || index < minSize) {
        set.add(nums1[index]);
        index++;
    }
    //remove element not include
    let result;
    for (let i of set) {
        if (!nums1.includes(i) || !nums2.includes(i)) {
            set.delete(i);
        }
    }
    return [...set];
}
;
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
