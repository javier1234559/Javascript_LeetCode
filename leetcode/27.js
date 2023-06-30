//27. Remove Element
//Easy
//Array
//https://leetcode.com/problems/remove-element/

var removeElement = function (nums, val) {
  let result = 0;
  nums.map((item, index) => {
    if (item !== val) {
      nums[result] = item;
      result++;
    }
  });
  return result;
};

console.log(removeElement([3, 2, 2, 3], 3));
