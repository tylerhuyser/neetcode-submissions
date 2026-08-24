class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let dictionary = {}
        
        for (const char of s1) {
            dictionary[char] = (dictionary[char] || 0) + 1
        }

        for (let i = 0; i < s2.length; i++) {

            let currentChar = s2[i]
            let tempDict = {...dictionary}
            
            if (currentChar in tempDict) {

                tempDict[currentChar]--

                for (let j = i + 1; j < s2.length; j++) {
                    let nextChar = s2[j]

                    if (!tempDict[nextChar] || tempDict[nextChar] === 0) {
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
