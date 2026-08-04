class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0
        if (nums.length === 1) return nums[0]
        if (nums.lenth === 2) return Math.max[nums[0], nums[1]]

        let prev1 = 0
        let prev2 = 0

        for (let i = 0; i < nums.length; i++) {
            let current = Math.max(prev1, nums[i] + prev2)
            prev2 = prev1
            prev1 = current
        }

        return Math.max(prev1, prev2)

    }

}
