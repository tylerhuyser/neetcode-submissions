class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        // 1. Determine the Character Frequency for the Shorter String
        let shortestDict = {}

        for (const char of s1) {
            shortestDict[char] = (shortestDict[char] || 0) + 1
        }

        // 3. Iterate through the loner string, looking for consecutive mathces.

        for (let i = 0; i < s2.length; i++) {
            let tempDict = {...shortestDict}

            let currentChar = s2[i]
            
            // 3.a. If a character matches, continue to iterate

            if (currentChar in shortestDict) {

                tempDict[currentChar]--

                for (let j = 1; j < s1.length; j++) {
                    let nextChar = s2[i + j]

                    if (tempDict[nextChar] === 0 || !(nextChar in tempDict)) {
                        break
                    } else {
                        tempDict[nextChar]--
                    }
                }

            } else {
                continue
            }

            let values = Object.values(tempDict)

            if (values.every(value => value === 0)) {
                return true
            }
        }

        return false

    }
}
