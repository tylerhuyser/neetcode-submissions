class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = -Infinity

        if (nums.length === 1) return nums[0]
        for (let l = 0; l < nums.length; l++){
            let current = nums[l]
            max = Math.max(max, current)
            for (let r = l + 1; r < nums.length; r++) {
                current += nums[r]
                max = Math.max(max, current)
            }
            max = Math.max(max, current)
        }

        return max
    }
}
