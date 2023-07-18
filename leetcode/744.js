"use strict";
//binary Search 
//744. Find Smallest Letter Greater Than Target
//http
Object.defineProperty(exports, "__esModule", { value: true });
function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    let firstResult = target;
    if (letters[right - 1] <= target || target < letters[0]) {
        return letters[0];
    }
    while (left + 1 < right) {
        console.log(right);
        console.log(letters[right]);
        let mid = left + (right - left) / 2;
        if (letters[mid] <= target) {
            left = mid;
        }
        else if (letters[mid] > target) {
            right = mid;
            console.log(right);
        }
    }
    return letters[right];
}
;
console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["c", "f", "j"], "a"));
