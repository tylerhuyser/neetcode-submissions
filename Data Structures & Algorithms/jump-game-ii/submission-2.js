class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let distance = nums.length

        if (distance === 1) return 0
        if (nums[0] === 0) return false

        let jumps = 0
        let max = 0
        let current = 0

        for (let i = 0; i < distance; i++) {
            max = Math.max(max, nums[i] + i)

            if (max >= distance - 1) {
                jumps++
                return jumps
            }

            if (i === current && i < max) {
                current = max
                jumps++
            }

        }
    }
}
