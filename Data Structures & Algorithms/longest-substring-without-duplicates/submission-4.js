class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let string = s
        let left = 0
        let right = 1

        if (s.length === 1) return s.length

        let max = 0

        for (let i = 0; i < s.length; i++) {

            let set = new Set()
            set.add(s[i])

            for (let j = i + 1; j < s.length; j++) {
                if (set.has(s[j])) break
                set.add(s[j])
            }

            max = Math.max(set.size, max)
        }

        return max


    }
}
