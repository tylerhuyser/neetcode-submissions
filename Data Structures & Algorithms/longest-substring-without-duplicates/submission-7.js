class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0
        let right = 0

        // if (s.length === 1) return s.length

        let max = 0

        let set = new Set()

        while (right < s.length) {

            if (set.has(s[right])) {
                set.delete(s[left])
                left++
            } else {
                set.add(s[right])
                max = Math.max(set.size, max)
                right++
            }
            
        }

        max = Math.max(max, set.size)

        return max

        // let max = 0

        // for (let i = 0; i < s.length; i++) {

        //     let set = new Set()
        //     set.add(s[i])

        //     for (let j = i + 1; j < s.length; j++) {
        //         if (set.has(s[j])) break
        //         set.add(s[j])
        //     }

        //     max = Math.max(set.size, max)
        // }

        // return max


    }
}
