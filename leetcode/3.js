"use strict";
//3. Longest Substring Without Repeating Characters
// Sliding window
//https://leetcode.com/problems/longest-substring-without-repeating-characters/
Object.defineProperty(exports, "__esModule", { value: true });
function lengthOfLongestSubstring(s) {
    //base
    let arrayChar = [...s];
    let n = arrayChar.length;
    if (n < 2)
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
        while (map.size != right - left + 1) {
            //decrease or remove left character from map and shrink window
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
