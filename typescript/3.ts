//3. Longest Substring Without Repeating Characters
// Sliding window
//https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  //base
  let arrayChar: string[] = [...s];
  let n: number = arrayChar.length;
  if (n < 2) return n;

  //define pointer
  let left: number = 0;
  let right: number = 0;

  //define table 
  const map = new Map<string, number>();

  //define flag
  let maxLength: number = 0;

  while (right < n) {
    let getOrDefault: number = map.get(arrayChar[right]) || 0;
    map.set(arrayChar[right], getOrDefault + 1);


    while (map.size != right - left + 1) {

      //decrease or remove left character from map and shrink window
      let getOrDefaultLeft: number = map.get(arrayChar[left]) || 0;
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
};


