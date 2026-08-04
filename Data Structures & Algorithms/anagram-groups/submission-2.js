class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = {}

        for (const string of strs) {
            let sortedString = string.split("").sort().join("")

            console.log(sortedString)

            if (sortedString in sorted) sorted[sortedString].push(string)
            else sorted[sortedString] = [string]
        }
        
        return Object.values(sorted)
    }
}
