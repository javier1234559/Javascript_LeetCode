var buildArray = function (nums) {
  return nums.map((item) => nums[item]);
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
