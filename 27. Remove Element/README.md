[vi - Vietnamese](./README.vi.md)

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100

---

There are two main ways to solve this problem: using two pointers or using a single pointer and a count variable.

Method 1: Using Two Pointers

In this method, we use two pointers: one pointer i iterates through each element of the array, and another pointer j points to the last position in the array that does not contain val. When we find an element that is not equal to val, we copy it to position j and increment j by 1.

The time complexity of this method is O(n), as we iterate through the array once. The space complexity is O(1), as we only use a constant number of additional variables.

Method 2: Using a Single Pointer and a Count Variable

In this method, we use a single pointer i to iterate through each element of the array and a count variable to keep track of the number of elements not equal to val. When we find an element not equal to val, we copy it to position count and increment count by 1.

The time and space complexity of this method is similar to Method 1: O(n) in time and O(1) in space.

Comparing the Two Methods

Both methods have similar time and space complexity, but Method 1 may change the order of elements in the array, while Method 2 maintains the original order. Therefore, if the order of elements is important, you should use Method 2. Otherwise, you can use either method.
