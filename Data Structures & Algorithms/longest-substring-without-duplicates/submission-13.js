class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let string = s
        let unique = new Set()
        let start = 0
        let end = 0
        let longest = 0

        while (end < s.length){
            let currentLetter = s[end]
            if (unique.has(currentLetter)) {
                unique.delete(string[start])
                start++
            } else if (!unique.has(currentLetter)) {
                unique.add(currentLetter)
                longest = Math.max(longest, unique.size)
                end++
            }
        }

        return longest
    }
}
