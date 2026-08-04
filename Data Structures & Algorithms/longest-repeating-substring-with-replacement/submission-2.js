class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let maxFreq = 0
        let max = 0

        let left = 0
        let right = 0
        let dict = {}

        while (right < s.length) {

            dict[s[right]] = (dict[s[right]] || 0) + 1
            maxFreq = Math.max(maxFreq, dict[s[right]])

            if (right - left + 1 - maxFreq <= k) {
                max = Math.max(maxFreq, right - left + 1)
            } else {
                dict[s[left]]--
                left++
            }

            right++
        }

        return max
    }
}
