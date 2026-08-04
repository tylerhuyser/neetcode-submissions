class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let strings = strs

        // 1. Define a dictionary
        let dict = {}

        // 2. For each String
        for (const string of strings) {

            // 2a. Sort each string
             let sorted = string.split("").sort().join("")

            // 2b. If the string is in the dictionary, push the UNSORTED value
             if (sorted in dict) {
                dict[sorted].push(string)
            // 2c. Otherwise, add a value AND DEFINE AS AN ARRAY
             } else {
               dict[sorted] = [string]
             }
        }

        // 5. Return the dictionary values ONLY
        console.log(dict)
        return Object.values(dict)
    }
}
