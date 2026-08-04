class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let strings = strs

        let dict = {}

        for (const string of strings) {
             let sorted = string.split("").sort().join("")

             if (sorted in dict) {
                dict[sorted].push(string)
             } else {
               dict[sorted] = [string]
             }
        }

        console.log(dict)
        return Object.values(dict)
    }
}
