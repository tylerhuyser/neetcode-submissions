class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let min = 0
        let max = 0
        for (const char of s) {
            if (char === "(") {
                min++
                max++
            } else if (char === ")") {
                min = Math.max(0, min - 1)
                max--
            } else {
                min = Math.max(0, min - 1)
                max++
            }

            if (max < 0) return false
         }

         return min === 0
    }
}
