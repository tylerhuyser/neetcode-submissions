class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let dict = {}
        
        for (const number of nums) {
            dict[number] = (dict[number] || 0) + 1
        }

        console.log(dict)

        return Object.keys(dict)
            .sort((a, b) => dict[b] - dict[a])
            .slice(0, k)
            .map(Number)
        
    }

    
}
