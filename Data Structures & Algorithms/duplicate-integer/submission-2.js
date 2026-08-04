class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        if (nums.length < 2) return false

        let dict = {}

        for (const number of nums) {

            dict[number] = (dict[number] || 0) + 1

        }

        console.log(dict)

        for (const entry of Object.values(dict)) {
            console.log(entry)
            if (entry > 1) {
                return true
            }
        }

        return false

    }
}
