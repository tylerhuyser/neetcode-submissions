class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let unique = new Set(nums)

        let longest = 0

        for (const num of nums) {
            if (unique.has(num - 1)) continue

            let current = 1

            while (unique.has(num + current)) {
                current++
            }

            longest = Math.max(longest, current)
        }

        return longest
    }
}
