class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return ""


        let tCount = {}
        for (const char of t) {
            tCount[char] = (tCount[char] || 0) + 1
        }

        let sCount = {}
        let have = 0
        let need = Object.keys(tCount).length
        let result = ""
        let left = 0

        for (let right = 0; right < s.length; right++) {
            let char = s[right]
            sCount[char] = (sCount[char] || 0) + 1

            if (char in tCount && sCount[char] === tCount[char]) {
                have++
            }

            while (have === need) {
                let window = s.slice(left, right + 1)
                if (result === "" || window.length < result.length) {
                    result = window
                }

                sCount[s[left]]--
                if (s[left] in tCount && sCount[s[left]] < tCount[s[left]]) {
                    have--
                }

                left++
            }
        }

        return result
    }
}
