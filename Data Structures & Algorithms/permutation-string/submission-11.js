class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let shortDictionary = {}

        for (const char of s1) {
            shortDictionary[char] = (shortDictionary[char] || 0) + 1
        }

        for (let i = 0; i < s2.length; i++) {
            let currentChar = s2[i]

            let tempDict={...shortDictionary}

            if (currentChar in shortDictionary) {

                tempDict[currentChar]--
                
                for (let j = 1; j < s1.length; j++) {
                    let nextChar = s2[i + j]

                    if (!shortDictionary[nextChar] || shortDictionary[nextChar] === 0) {
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
