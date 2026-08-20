class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0
        let left = 0
        let right = 0
        let dict = new Set()

        while (right < s.length) {
            let currentEnd = s[right]
            if (dict.has(currentEnd)) {
                dict.delete(s[left])
                left++
            } else if (!dict.has(currentEnd)) {
                dict.add(currentEnd)
                right++
                longest = Math.max(longest, right - left)
            }
        }

        return longest

    }
}
