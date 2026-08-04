class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let distance = nums.length

        if (nums.length === 1) return true
        if (nums[0] === 0) return false

        let max = 0
        let current = 0
        let jumps = 0

        for (let i = 0; i < distance; i++) {
            max = Math.max(max, nums[i] + i)

            if (max >= distance - 1) {
                jumps++
                return true
            }

            if (i === current) {

                if (i === max) {
                    return false
                } else if (i < max) {
                    current = max
                    jumps++
                }

            }
        }

        return false

    }
}
