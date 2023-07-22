"use strict";
//binary Search 
//744. Find Smallest Letter Greater Than Target
//https://leetcode.com/problems/find-smallest-letter-greater-than-target/
Object.defineProperty(exports, "__esModule", { value: true });
function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;
    if (letters[right - 1] <= target || target < letters[0]) {
        return letters[0];
    }
    while (left + 1 < right) {
        let mid = left + (right - left) / 2;
        if (letters[mid] <= target) {
            left = mid;
        }
        else if (letters[mid] > target) {
            right = mid;
        }
    }
    return letters[right];
}
;
console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "e"));
// console.log(nextGreatestLetter(["c", "f", "j"], "c"));
// console.log(nextGreatestLetter(["c", "f", "j"], "a"));
// function nextGreatestLetter(letters: string[], target: string): string {
//   let ans: string = letters[0];
//   let left = 0;
//   let right = letters.length - 1;
//   while (left <= right) {
//     let mid: number = left + ((right - left) / 2);
//     let smallestUseToCheck = String.fromCharCode((target.charCodeAt(0) + 1))
//     console.log(smallestUseToCheck);
//     if (letters[mid] >= smallestUseToCheck) {
//       ans = letters[mid];
//       right = mid - 1;
//     } else if (letters[mid] > smallestUseToCheck) {
//       right = mid - 1
//     } else {
//       left = mid + 1;
//     }
//   }
//   return ans;
// };
