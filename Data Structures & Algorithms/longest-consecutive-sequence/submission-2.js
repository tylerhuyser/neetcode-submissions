class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unique = new Set(nums)

        let longest = 0

        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            
            if (!unique.has(currentNum - 1)) {
                let length = 1
                while (unique.has(currentNum + length)) {
                    length++
                }
                longest = Math.max(longest, length)
            }
            
        }

        return longest
    }
}
