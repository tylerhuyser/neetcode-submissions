class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        console.log(clean)

        let left = 0
        let right = clean.length - 1

        while (left < right) {
            if (clean[left] !== clean[right]) {
                return false
            }

            left++
            right--
        }


        return true


    }
}
