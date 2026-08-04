class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // 1. Define a set of unique values
        let set = new Set(nums)

        // 2. Define the longest length to return at 0
        let longest = 0 

        // 3. Iterate through each number in the set
        for (const num of set) {

            // 3.a. Guard If condiiton -- to prevent internal streaks. I.e. if the longes streak is 2, 3, 4, 5, we do not need to iterate 3, 4,5.
            if (!set.has(num - 1)) {

                // 3.b. define length as 1 and increment if the next value is present in set
                let length = 1
                while (set.has(num + length)) {
                    length++
                }

                // 3c. if current streak is longer than previous, redfine.
                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
