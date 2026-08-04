class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        let encoded = ''

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

        let decoded = []
        let i = 0

        while (i < str.length) {
            let j = str.indexOf('#', i)
            let length = parseInt(str.substring(i , j))
            decoded.push(str.substring(j + 1, j + 1 + length))
            i = j + 1 + length
        }

        return decoded
    }
}
