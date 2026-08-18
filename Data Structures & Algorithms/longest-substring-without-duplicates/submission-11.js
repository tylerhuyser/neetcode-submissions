class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let string = s
        let set = new Set()
        let start = 0
        let end = 0
        let longest = 0

        while (end < s.length){
            let currentLetter = s[end]
            if (set.has(currentLetter)) {
                set.delete(string[start])
                start++
            } else if (!set.has(currentLetter)) {
                set.add(currentLetter)
                end++
                longest = Math.max(longest, end - start)
            }
        }

        return longest
    }
}
