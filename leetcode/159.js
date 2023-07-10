"use strict";
// premium problem
//Sliding window
Object.defineProperty(exports, "__esModule", { value: true });
function lengthOfLongestSubStringTwoDistinct(s) {
    //base
    let arrayChar = [...s];
    let n = arrayChar.length;
    if (n < 3)
        return n;
    //define pointer
    let left = 0;
    let right = 0;
    //define table 
    const map = new Map();
    //define flag
    let maxLength = 0;
    while (right < n) {
        let getOrDefault = map.get(arrayChar[right]) || 0;
        map.set(arrayChar[right], getOrDefault + 1);
        while (map.size > 2) { //start to shrink a window if map over 2 distinct element
            let getOrDefaultLeft = map.get(arrayChar[left]) || 0;
            map.set(arrayChar[left], getOrDefaultLeft - 1);
            if (map.get(arrayChar[left]) === 0) {
                map.delete(arrayChar[left]);
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    return maxLength;
}
;
console.log(lengthOfLongestSubStringTwoDistinct("ccaabbb"));
//eceba
// |
//   |
//ccaabbb
