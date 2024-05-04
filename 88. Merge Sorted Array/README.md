[vi - Vietnamese](./README.vi.md)

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109

Follow up: Can you come up with an algorithm that runs in O(m + n) time?

---

The "merge from the end" algorithm is an efficient solution to the problem of merging two sorted arrays.

Algorithm Logic:

First, we initialize three pointers: indexNums1, indexNums2, and mergeIndex. indexNums1 and indexNums2 point to the end of nums1 and nums2 respectively, while mergeIndex points to the last position of the array nums1 (including the zero elements).

Next, we start a while loop that runs until both nums1 and nums2 have been fully traversed. In each iteration, we compare the element at position indexNums1 of nums1 and the element at position indexNums2 of nums2. The larger element is inserted into nums1 at the mergeIndex position.

Finally, after the while loop ends, there may still be some elements left in nums2. Therefore, we need a second while loop to copy the remaining elements from nums2 into nums1.

Reason for Choosing the Algorithm:

The "merge from the end" algorithm is chosen because it does not require additional space and operates in linear time O(m + n), where m and n are the number of elements in each array. This makes it an efficient solution for this problem.

Complexity:

Time: O(m + n), where m and n are the number of elements in each array. This is because in the worst case, we need to traverse all the elements in both arrays.
Space: O(1), as we do not use any additional space apart from the index variables.
Advantages Over Other Algorithms:

No additional space required: Unlike the traditional merge algorithm, the "merge from the end" algorithm does not require additional space, making it a good solution for the problem of merging two arrays when additional space is not allowed.
Time-efficient: The "merge from the end" algorithm operates in linear time, making it an efficient solution for the problem of merging two sorted arrays.
