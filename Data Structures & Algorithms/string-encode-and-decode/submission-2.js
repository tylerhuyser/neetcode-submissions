class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log(strs)
        let combined = ''

        for (const string of strs) {
            let length = string.length
            combined = combined + length.toString() + "#" + string
        }

        return combined
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)

        let strings = []
        let currentIndex = 0

        while (currentIndex < str.length) {
            let hashIndex = str.indexOf("#", currentIndex)

            let length = parseInt(str.slice(currentIndex, hashIndex))
            let currentString = str.slice(hashIndex + 1, hashIndex + 1 + length)
            strings.push(currentString)

            currentIndex = hashIndex + 1 + length
        }

        return strings
    }
}
