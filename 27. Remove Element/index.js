// Sử dụng hai con trỏ
var removeElement = function (nums, val) {
  let i = 0;
  let num = nums.length;
  while (i < num) {
    if (nums[i] === val) {
      nums[i] = nums[num - 1];
      num--;
    } else {
      i++;
    }
  }
  return num;
};

//một con trỏ và một biến đếm 
var removeElement1ptr = function (nums, val) {
  let count = 0;
  for (let i in nums) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

let nums = [3, 2, 2, 3], val = 3

console.log(removeElement(nums, val))
console.log(nums)