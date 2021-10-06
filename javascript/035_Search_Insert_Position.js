/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((right - left) / 2) + left;
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 2));
