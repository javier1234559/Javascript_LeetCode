"use strict";
//Medium
//Sliding window problem
//https://leetcode.com/problems/longest-repeating-character-replacement/description/
Object.defineProperty(exports, "__esModule", { value: true });
function characterReplacement(s, k) {
    //base case
    let arrayChar = s.split('');
    let n = arrayChar.length;
    let left = 0;
    let right = 0;
    //define map
    let map = new Map();
    //define problem
    let maxLengthWindow = 0;
    let mostFreq = 0;
    while (right < n) {
        map.set(arrayChar[right], (map.get(arrayChar[right]) || 0) + 1);
        mostFreq = Math.max(mostFreq, map.get(arrayChar[right]));
        while ((right - left + 1) - mostFreq > k) { //right-left+1 is the window size minus to mostFreq is the number must use k to replace
            map.set(arrayChar[left], map.get(arrayChar[left]) - 1);
            left++;
        }
        maxLengthWindow = Math.max(maxLengthWindow, right - left + 1);
        right++;
    }
    return maxLengthWindow;
}
