class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false

        let dict = {}

        for (const char of s1) {
            dict[char] = (dict[char] || 0) + 1
        }

        // console.log(dict)

        let totalChars = s1.length

        for (let i = 0; i < s2.length; i++) {
            let tempDict = {...dict}
            // console.log(`Initialize Temp Dict:`)
            // console.log(tempDict)
            let outerVal = s2[i]
            // console.log(`Outer Value: ${outerVal}`)
            if (outerVal in dict) {

                // console.log(`Outer Value Match - Streak Initiates`)
                tempDict[outerVal]--
                // console.log(`Updated Temp Dict:`)
                // console.log(tempDict)

                for (let j = 1; j < totalChars; j++) {

                    let innerVal = s2[i + j]
                    // console.log(`Inner Value: ${innerVal}`)

                    if (tempDict[innerVal] === 0 || !(innerVal in tempDict)) {
                        // console.log(`Streak Broken`)
                        break
                    } else {
                        // console.log('Inner Value Match')
                        tempDict[innerVal]--
                        // console.log(`Updated Temp Dict`)
                        // console.log(tempDict)
                    }
                }
            } else {
                // console.log('No Match! Continuing...')
                continue
            }

            let values = Object.values(tempDict)
            // console.log(`Values: ${values}`)

            if (values.every(value => value === 0)) {
                return true
            }

        }

        return false
    }
}
