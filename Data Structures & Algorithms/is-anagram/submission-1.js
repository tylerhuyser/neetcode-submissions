class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false

        let dict = {}

        for (let i = 0; i < s.length; i++) {
            dict[s[i]] = (dict[s[i]] || 0) + 1
            dict[t[i]] = (dict[t[i]] || 0) - 1
        }
        
        console.log(dict)

        for (const entry of Object.values(dict)) {
            console.log(entry)
            if (entry !== 0) return false
        }

        return true
    }
}
