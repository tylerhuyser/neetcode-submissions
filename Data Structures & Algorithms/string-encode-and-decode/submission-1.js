class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        // 1. Define an empty string
        let encoded = ''

        // 2. For each string, append the string length, a "#" and the string iteself
        for (const string of strs) {
            encoded += string.length + '#' + string
        }

        console.log(encoded)

        return encoded
       
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        // 1. Define an empty array
        let decoded = []

        // 2. Initialize a pointer
        let i = 0

        // 3. Loop through string values.
        while (i < str.length) {

            // 3a. Search for the next occurance of the '#' AFTER the pointer.
            let j = str.indexOf('#', i)

            // 3b. Define the value from pointer up to the #
            let length = parseInt(str.substring(i , j))

            // 3d. push the respective substring
            decoded.push(str.substring(j + 1, j + 1 + length))

            // 3e. The new I is the index of # + the length of the word + 1.
            i = j + 1 + length
        }

        return decoded
    }
}
