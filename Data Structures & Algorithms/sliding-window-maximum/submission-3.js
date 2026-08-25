class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        // 1. Define the Result Array, Deque Array and Left Pointer
        let result = []
        let deque = []
        let left = 0

        // 2. Iterate through the nums...
        for (let right = 0; right < nums.length; right++) {
            
            let currentNum = nums[right]
            while (deque.length && nums[deque[deque.length - 1]] < currentNum) {
                deque.pop();
            }

            // 2.a. Push the index of each element into the array
            deque.push(right)

            // 2.b. If the first deque index is left than the left index, then shift the entire array and elminate the index that is no longer in range.
            if (deque[0] < left) {
                deque.shift()
            }

            // 2.c. Once the right pointer reaches the minimum Window size or larger, push the greatest value and increment the left pointer.
            if (right >= k - 1) {
                result.push(nums[deque[0]])
                left++
            }
        }

        return result

    }
}
