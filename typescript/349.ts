//Random 
//349. Intersection of Two Arrays
//

function intersection(nums1: number[], nums2: number[]): number[] {
  //base case
  let minSize: number = Math.min(nums1.length, nums2.length);

  //define set
  let set = new Set<number>();

  //add element to set
  let index: number = 0;
  while (index < minSize || index < minSize) {
    set.add(nums1[index]);
    index++;
  }

  //remove element not include
  let result: number[];
  for (let i of set) {
    if (!nums1.includes(i) || !nums2.includes(i)) {
      set.delete(i);
    }
  }
  return [...set];
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))