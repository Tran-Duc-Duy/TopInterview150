var merge = function (nums1, lengthNums1, nums2, lengthNums2) {
  let indexNums1 = lengthNums1 - 1;
  let indexNums2 = lengthNums2 - 1;
  let mergeIndex = lengthNums1 + lengthNums2 - 1;

  while (indexNums1 >= 0 && indexNums2 >= 0) {
    if (nums1[indexNums1] > nums2[indexNums2]) {
      nums1[mergeIndex] = nums1[indexNums1];
      indexNums1--;
    } else {
      nums1[mergeIndex] = nums2[indexNums2];
      indexNums2--;
    }
    mergeIndex--;
  }

  // If there are remaining elements in nums2, copy them into nums1
  while (indexNums2 >= 0) {
    nums1[mergeIndex] = nums2[indexNums2];
    indexNums2--;
    mergeIndex--;
  }
};
let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(nums1)
console.log(nums2)

merge(nums1, m, nums2, n)
console.log(nums1)