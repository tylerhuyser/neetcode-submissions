class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1

        while (nums[left] > nums[right]) {
            left++
        }

        return nums[left]
    }
}
