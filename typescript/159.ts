// premium problem
//Sliding window

function lengthOfLongestSubStringTwoDistinct(s: string): number {
  //base
  let arrayChar :string[] = [...s];
  let n :number = arrayChar.length;
  if(n < 3) return n ;

  //define pointer
  let left :number = 0;
  let right :number = 0;

  //define table 
  const map = new Map<string,number>();

  //define flag
  let maxLength :number = 0;

  while(right < n ){
    let getOrDefault :number = map.get(arrayChar[right]) || 0 ;
    map.set(arrayChar[right], getOrDefault + 1);

    while(map.size > 2){ //start to shrink a window if map over 2 distinct element
      let getOrDefaultLeft :number = map.get(arrayChar[left]) || 0 ;
      map.set(arrayChar[left], getOrDefaultLeft - 1);

      if(map.get(arrayChar[left]) === 0 ){
        map.delete(arrayChar[left]);
      }
      
      left++;
    }

    maxLength = Math.max(maxLength,right - left + 1);
    right++;
  }

  return maxLength;

};

console.log(lengthOfLongestSubStringTwoDistinct("ccaabbb"))

//eceba
// |
//   |
//ccaabbb