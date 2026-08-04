class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // 1. Create a dictionary
        let dict = {}
        
        // 2. Loops through the values and increment as needed
        for (const number of nums) {
            dict[number] = (dict[number] || 0) + 1
        }

        console.log(dict)

        // Return the keys, sorted by their respective values, slice the number to return, and conver to numbers.
        return Object.keys(dict)
            .sort((a, b) => dict[b] - dict[a])
            .slice(0, k)
            .map(Number)
        
    }

    
}
