class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let counts = {}

        for (const char of S) {
            counts[char] = (counts[char] || 0) + 1
        } 
         
        let output = []
        let index = 0

        let string = ""
        let unique = new Set()

        while (index < S.length) {

            let currentVal = S[index]
            if (unique.has(S[index])) {
                counts[currentVal]--
                string = string + currentVal
            } else {
                unique.add(currentVal)
                counts[currentVal]--
                string = string + currentVal
            }

            if (counts[currentVal] === 0) {
                unique.delete(currentVal)
            }

            if (unique.size === 0) {
                output.push(string.length)
                string = ""
            }



            index++
        }

        if (string.length > 0) {
             output.push(string.length)
            string = ""
        }

        return output
    }
}
