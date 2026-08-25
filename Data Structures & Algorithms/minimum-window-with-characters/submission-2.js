class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {

        // 1. If T is longer than S, return an empty string.
        if (t.length > s.length) return ""

        // 2. Calculate the count of T
        let tDict = {}
        for (const char of t) {
            tDict[char] = (tDict[char] || 0) + 1
        }

        // 3. Define key variables -- the sDict, the number of needed characters, the number of characters we have, the final result (string) and the left pointer.
        let sDict = {}
        let have = 0
        let need = Object.keys(tDict).length
        let result = ""
        let left = 0

        // 3. Iterate through string S.
        for (let right = 0; right < s.length; right++) {
            let currentChar = s[right]
            sDict[currentChar] = (sDict[currentChar] || 0) + 1  

            // 3.a. If currentCharacter is in T AND we match the quanitity of these characters, we increment up.
            if (currentChar in tDict && sDict[currentChar] === tDict[currentChar]) {
                have++
            }

            // 3.b. While the haves === needs, we move the left pointer to see how small we can make the window.
            while (have === need) {
                let window = s.slice(left, right + 1)

                // 3.c. If the window is smaller, save it.
                if (result === "" || window.length < result.length) {
                    result = window
                }
                sDict[s[left]]--
                // 3.e. If moving the left pointer reduces the number of "Haves" -- do so.
                if (s[left] in tDict && sDict[s[left]] < tDict[s[left]]) {
                    have--
                }

                left++
            }
        }

        return result
        
    }
}
