class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let longestStreak = 0
        let unique = new Set()

        while (right < s.length) {
            let currentLetter = s[right]
            if (unique.has(currentLetter)) {
                unique.delete(s[left])
                left++
            } else {
                unique.add(currentLetter)
                longestStreak = Math.max(longestStreak, unique.size)
                right++
            }
        }

        longestStreak = Math.max(longestStreak, unique.size)

        return longestStreak
    }
}
