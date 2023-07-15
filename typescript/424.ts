//Medium
//Sliding window problem
//https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s: string, k: number): number {
  //base case
  let arrayChar: string[] = s.split('');
  let n: number = arrayChar.length;
  let left: number = 0;
  let right: number = 0;

  //define map
  let map: Map<string, number> = new Map();

  //define problem
  let maxLengthWindow: number = 0;
  let mostFreq: number = 0;

  while (right < n) {
    map.set(arrayChar[right], (map.get(arrayChar[right]) || 0) + 1);
    mostFreq = Math.max(mostFreq, map.get(arrayChar[right])!);

    while ((right - left + 1) - mostFreq > k) {   //right-left+1 is the window size minus to mostFreq is the number must use k to replace
      map.set(arrayChar[left], map.get(arrayChar[left])! - 1);
      left++;
    }

    maxLengthWindow = Math.max(maxLengthWindow, right - left + 1);
    right++;
  }

  return maxLengthWindow;

}
