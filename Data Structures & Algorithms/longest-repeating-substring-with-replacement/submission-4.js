class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let frequencies = {}
        let maxFrequency = 0
        let max = 0

        let left = 0
        let right = 0

        while (right < s.length) {
            frequencies[s[right]] = (frequencies[s[right]] || 0) + 1
            maxFrequency = Math.max(maxFrequency, frequencies[s[right]])

            if (right - left + 1 - maxFrequency <= k) {
                max = Math.max(maxFrequency, right - left + 1)
            } else {
                frequencies[s[left]]--
                left++
            }

            right++

        }

        return max

    }
}
