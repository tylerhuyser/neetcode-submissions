class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return ""

        let tDict = {}
        for (const char of t) {
            tDict[char] = (tDict[char] || 0) + 1
        }

        let sDict = {}
        let have = 0
        let need = Object.keys(tDict).length
        let result = ""
        let left = 0

        for (let right = 0; right < s.length; right++) {
          let currentChar = s[right]
          sDict[currentChar] = (sDict[currentChar] || 0) + 1
          if (currentChar in tDict && sDict[currentChar] === tDict[currentChar]) {
            have++
          }

          while (have === need) {
            let window = s.slice(left, right + 1)
            if (result === "" || window.length < result.length) result = window
            sDict[s[left]]--
            if (s[left] in tDict && sDict[s[left]] < tDict[s[left]]) have--

            left++
            
          }
          
        }

        return result
    }
}
