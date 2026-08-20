class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let frequencies = {}
        let mostFrequent = 0
        let maxLength = 0

        let left = 0
        let right = 0

        while (right < s.length) {

            frequencies[s[right]] = (frequencies[s[right]] || 0) + 1
            mostFrequent = Math.max(mostFrequent, frequencies[s[right]])

            if (right - left + 1 - mostFrequent <= k) {
                maxLength = Math.max(mostFrequent, right - left + 1)
            } else {
                frequencies[s[left]]--
                left++
            }

            right++
            
            
        }

        return maxLength
    }
}
