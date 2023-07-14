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
    //decrease or remove left character from map and shrink window
    let getOrDefaultLeft: number = map.get(arrayChar[left]) || 0;
    map.set(arrayChar[left], getOrDefaultLeft + 1);
    mostFreq = Math.max(mostFreq, map.get(arrayChar[right]));

    if ((right - left + 1) - mostFreq > k) {
      map.set(arrayChar[left], map.get(arrayChar[left]) - 1);
      left++;
    }

    maxLengthWindow = Math.max(maxLengthWindow, right - left + 1);
    right++;
  }

  return maxLengthWindow;
};

console.log(characterReplacement("AABABBA", 1))
//AABABBA
//  i
//   j

//ABBCAA
//i
// j  
